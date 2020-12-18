/**
 * Checks if the HTML parameter provided is a HTML element.
 * @param {Element} a HTML element or a HTML string
 * @returns {boolean} true or false
 */
function isHTMLElement(html) {
    return !!html && typeof html === 'object' && typeof html.tagName === 'string'
  }
  
  /**
   * Checks that the HTML parameter provided is a string that contains HTML.
   * @param {string} a HTML element or a HTML string
   * @returns {boolean} true or false
   */
  function isHTMLString(html) {
    return typeof html === 'string' && /(<([^>]+)>)/i.test(html)
  }
  
  /**
   * Converts a HTML string or HTML element to a mounted HTML element.
   * @param {Element | string} a HTML element or a HTML string
   * @returns {[Element, function]} a HTML element and a function to restore the document
   */
  function mount (html) {
    if (isHTMLElement(html)) {
      if (document.body.contains(html)) {
        return [html, () => undefined]
      }
      html = html.outerHTML
    }
  
    if (isHTMLString(html)) {
      const originalHTML = document.body.innerHTML
      const restore = () => {
        document.body.innerHTML = originalHTML
      }
  
      document.body.innerHTML = html
      return [document.body, restore]
    }
  
    if (typeof html === 'string') {
      throw new Error(`html parameter ("${html}") has no elements`)
    }
  
    throw new Error(`html parameter should be an HTML string or an HTML element`)
  }
  
  function checkStatusOfBuild(build) {
    if (build.serious === 0 && build.moderate === 0 && build.critical === 0 && build.minor === 0) {
      return Object.assign({}, build, {
        status: 'PASSING',
      });
    }
    if (build.critical > build.serious && build.critical > build.moderate && build.critical > build.minor) {
      return Object.assign({}, build, {
        status: 'CRITICAL',
      });
    }
    if (build.serious > build.critical && build.serious > build.moderate && build.serious > build.minor) {
      return Object.assign({}, build, {
        status: 'SERIOUS',
      });
    }
    if (build.minor > build.critical && build.minor > build.serious && build.minor > build.moderate) {
      return Object.assign({}, build, {
        status: 'MINOR',
      });
    }
    return Object.assign({}, build, {
      status: 'MODERATE',
    });
  }
  
  function normaliseBuild(projectId, results) {
    let build = {
      projectId,
      issues: [],
      critical: 0,
      serious: 0,
      moderate: 0,
      minor: 0,
      status: 'PASSING',
      normalized: true,
    };
    results.violations.forEach((result, idx) => {
      build.issues.push({
        id: result.id,
        name: `Issue ${idx + 1}`,
        impact: result.impact,
        description: result.description,
        help: result.help,
        nodes: result.nodes.filter(Boolean).map(n => {
          try {
            const any = JSON.parse(JSON.stringify(n.any));
            return Object.assign({}, n, { any });
          } catch (e) {
            throw Error(e);
          }
        }),
      });
      if (result.impact === 'critical') {
        build.critical = build.critical += 1;
      }
      if (result.impact === 'serious') {
        build.serious = build.serious += 1;
      }
      if (result.impact === 'moderate') {
        build.moderate = build.moderate += 1;
      }
      if (result.impact === 'minor') {
        build.minor = build.minor += 1;
      }
    });
    return checkStatusOfBuild(build);
  };
  
  function isEmptyObjectorNull(value) {
    if (value == null) return true
    return Object.entries(value).length === 0 && value.constructor === Object
  }
  
  module.exports = {
    mount,
    normaliseBuild,
    isEmptyObjectorNull,
  }