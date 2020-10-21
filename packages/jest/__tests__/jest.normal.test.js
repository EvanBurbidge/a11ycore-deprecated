const { runA11yJest, configureA11yJest } = require("..");

describe('jest-axe', () => {
  describe('axe', () => {
    const failingHtmlExample = `
     <html>
       <body>
         <a href="#"></a>
       </body>
     </html>
    `

    const failingExtendedHtmlExample = `
     <html>
       <body>
         <a href="#"></a>
         <img src="#"/>
       </body>
     </html>
    `

    const goodHtmlExample = `
     <html>
       <body>
        <main>
         <a href="http://gov.uk">Visit GOV.UK</a>
        </main>
       </body>
     </html>
    `

    const linkNameAxe = configureA11yJest({
      rules: {
        'link-name': { enabled: false }
      }
    })

    it('can be configured for global configs', async () => {
      const results = await linkNameAxe(failingHtmlExample)
      expect(results.violations).toEqual([])
    })

    it('can pass in merged configurations to configured axe', async () => {
      const results = await linkNameAxe(failingExtendedHtmlExample, {
        rules: {
          'image-alt': { enabled: false },
          'region': { enabled: false }
        }
      })
      expect(results.violations).toEqual([])
    })

    it('returns an axe results object', async () => {
      const results = await axe(failingHtmlExample)
      expect(typeof results).toBe('object')
      expect(typeof results.violations).toBe('object')
    })

    it('should not mutate the content of document.body permanently', async () => {
      const el = document.body.appendChild(document.createElement("div"))
      await axe(goodHtmlExample)
      expect(document.body.childElementCount).toBe(1)
      expect(document.body.firstChild).toEqual(el)
    })

    it('returns violations for failing html example', async () => {
      const results = await axe(failingHtmlExample)
      const violation = results.violations[0]
      expect(violation.id).toBe('link-name')
      expect(violation.description).toBe('Ensures links have discernible text')
    })

    it('can ignore allowed failures', async () => {
      const results = await axe(failingHtmlExample, {
        rules: {
          'link-name': { enabled: false }
        }
      })
      expect(results.violations).toEqual([])
    })

    it('returns no violations for a good html example', async () => {
      const results = await axe(goodHtmlExample)
      expect(results.violations).toEqual([])
    })

    it('throws if input is not a string, vue element, react element, or react testing library render', () => {
      expect(() => {
        axe({})
      }).toThrow('html parameter should be an HTML string or an HTML element')
    })

    it('throws with non-html input', () => {
      expect(() => {
        axe('Hello, World')
      }).toThrow('html parameter ("Hello, World") has no elements')
    })

    it('should not mutate previous options', async () => {
      let results = await axe(failingHtmlExample, {
        rules: {
          'link-name': { enabled: false }
        }
      })
      expect(results.violations).toEqual([])

      const configuredAxe = configureA11yJest({
        rules: {
          'link-name': { enabled: false }
        }
      })

      results = await configuredAxe(failingHtmlExample, {
        rules: {
          'link-name': { enabled: false }
        }
      })
      expect(results.violations).toEqual([])

      results = await axe(failingHtmlExample)
      const violation = results.violations[0]
      expect(violation.id).toBe('link-name')
      expect(violation.description).toBe('Ensures links have discernible text')
    })
  })


  describe('readme', () => {
    describe('first readme example', () => {

      it('should demonstrate this matcher`s usage', async () => {
        const render = () => '<img src="#"/>'

        // pass anything that outputs html to axe
        const html = render()
        const results = await axe(html)
        expect(results.violations.length).toBe(0);
      })
    })
    describe('readme axe config example', () => {


      it('should demonstrate this matcher`s usage with a custom config', async () => {
        const render = () => `
          <div>
            <img src="#"/>
          </div>
        `

        // pass anything that outputs html to axe
        const html = render()

        const results = await axe(html, {
          rules: {
            // for demonstration only, don't disable rules that need fixing.
            'image-alt': { enabled: false },
            'region': { enabled: false }
          }
        })

        expect(results.violations.length).toBe(0)
      })
    })
    describe('readme axe global config example', () => {
      // Global helper file (axe-helper.js)

      const configuredAxe = configureA11yJest({
        rules: {
          // for demonstration only, don't disable rules that need fixing.
          'image-alt': { enabled: false },
          'region': { enabled: false }
        }
      })

      it('should demonstrate this matcher`s usage with a default config', async () => {
        const render = () => `
          <div>
            <img src="#"/>
          </div>
        `

        // pass anything that outputs html to axe
        const html = render()
        const results = await runA11yJest(html);
        expect(results.violations.length).toBe(0);
      })
    })
    describe('configure custom rule', () => {
      
      it('should report custom rules', async () => {

        const check = {
          id: 'demo-has-data',
          evaluate(node) {
            return node.hasAttribute('data-demo-rule');
            
          },
          metadata: {
            impact: 'serious',
            messages: {
              fail: 'Error!',
            },
          },
        }
        const rule = {
          id: 'demo-rule',
          selector: '.demo',
          enabled: false,
          tags: ['demo-rules'],
          any: ['demo-has-data'],
          metadata: {
            description: 'Demo check',
            help: 'Demo check',
          },
        }

        const configuredAxe = configureA11yJest({
          globalOptions: {
            rules: [rule],
            checks: [check]
          },
          rules: {
            'demo-rule': { enabled: true }
          }
        })


        const html = `
        <html>
          <body>
            <main>
              <div class="demo">
            </main>
          </body>
        </html>
        `

        const results = await configuredAxe(html)
        expect(results.violations[0].id).toBe('demo-rule')
      })
    })
  })
})