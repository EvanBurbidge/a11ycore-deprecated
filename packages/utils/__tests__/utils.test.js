"use strict";

const utils = require("..");

const fixture = {
  testEngine: { name: "axe-core", version: "4.0.2" },
  testRunner: { name: "axe" },
  testEnvironment: {
    userAgent:
      "Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/16.4.0",
    windowWidth: 1024,
    windowHeight: 768,
  },
  timestamp: "2020-10-25T18:12:08.133Z",
  url: "http://localhost/",
  toolOptions: { reporter: "v1" },
  violations: [
    {
      id: "image-alt",
      impact: "critical",
      tags: [
        "cat.text-alternatives",
        "wcag2a",
        "wcag111",
        "section508",
        "section508.22.a",
      ],
      description:
        "Ensures <img> elements have alternate text or a role of none or presentation",
      help: "Images must have alternate text",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/image-alt?application=axeAPI",
      nodes: [
        {
          any: [
            {
              id: "has-alt",
              data: null,
              relatedNodes: [],
              impact: "critical",
              message: "Element does not have an alt attribute",
            },
            {
              id: "aria-label",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message: "aria-label attribute does not exist or is empty",
            },
            {
              id: "aria-labelledby",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message:
                "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
            },
            {
              id: "non-empty-title",
              data: null,
              relatedNodes: [],
              impact: "serious",
              message:
                "Element has no title attribute or the title attribute is empty",
            },
            {
              id: "role-presentation",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message:
                'Element\'s default semantics were not overridden with role="presentation"',
            },
            {
              id: "role-none",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message:
                'Element\'s default semantics were not overridden with role="none"',
            },
          ],
          all: [],
          none: [],
          impact: "critical",
          html: '<img src="#" data-reactroot="">',
          target: ["img"],
          failureSummary:
            'Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute or the title attribute is empty\n  Element\'s default semantics were not overridden with role="presentation"\n  Element\'s default semantics were not overridden with role="none"',
        },
      ],
    },
    {
      id: "region",
      impact: "moderate",
      tags: ["cat.keyboard", "best-practice"],
      description: "Ensures all page content is contained by landmarks",
      help: "All page content must be contained by landmarks",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/region?application=axeAPI",
      nodes: [
        {
          any: [
            {
              id: "region",
              data: null,
              relatedNodes: [],
              impact: "moderate",
              message: "Some page content is not contained by landmarks",
            },
          ],
          all: [],
          none: [],
          impact: "moderate",
          html: '<img src="#" data-reactroot="">',
          target: ["img"],
          failureSummary:
            "Fix any of the following:\n  Some page content is not contained by landmarks",
        },
      ],
    },
  ],
  passes: [
    {
      id: "aria-hidden-body",
      impact: null,
      tags: ["cat.aria", "wcag2a", "wcag412"],
      description:
        "Ensures aria-hidden='true' is not present on the document body.",
      help: "aria-hidden='true' must not be present on the document body",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/aria-hidden-body?application=axeAPI",
      nodes: [
        {
          any: [
            {
              id: "aria-hidden-body",
              data: null,
              relatedNodes: [],
              impact: "critical",
              message: "No aria-hidden attribute is present on document body",
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<body><img src="#" data-reactroot=""></body>',
          target: ["body"],
        },
      ],
    },
    {
      id: "image-redundant-alt",
      impact: null,
      tags: ["cat.text-alternatives", "best-practice"],
      description: "Ensure image alternative is not repeated as text",
      help: "Alternative text of images should not be repeated as text",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/image-redundant-alt?application=axeAPI",
      nodes: [
        {
          any: [],
          all: [],
          none: [
            {
              id: "duplicate-img-label",
              data: null,
              relatedNodes: [],
              impact: "minor",
              message:
                "Element does not duplicate existing text in <img> alt text",
            },
          ],
          impact: null,
          html: '<img src="#" data-reactroot="">',
          target: ["img"],
        },
      ],
    },
  ],
  incomplete: [],
  inapplicable: [
    {
      id: "accesskeys",
      impact: null,
      tags: ["best-practice", "cat.keyboard"],
      description: "Ensures every accesskey attribute value is unique",
      help: "accesskey attribute value must be unique",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/accesskeys?application=axeAPI",
      nodes: [],
    },
    {
      id: "area-alt",
      impact: null,
      tags: [
        "cat.text-alternatives",
        "wcag2a",
        "wcag111",
        "wcag244",
        "wcag412",
        "section508",
        "section508.22.a",
      ],
      description: "Ensures <area> elements of image maps have alternate text",
      help: "Active <area> elements must have alternate text",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/area-alt?application=axeAPI",
      nodes: [],
    },
    {
      id: "aria-allowed-attr",
      impact: null,
      tags: ["cat.aria", "wcag2a", "wcag412"],
      description: "Ensures ARIA attributes are allowed for an element's role",
      help: "Elements must only use allowed ARIA attributes",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/aria-allowed-attr?application=axeAPI",
      nodes: [],
    },
    {
      id: "aria-allowed-role",
      impact: null,
      tags: ["cat.aria", "best-practice"],
      description:
        "Ensures role attribute has an appropriate value for the element",
      help: "ARIA role must be appropriate for the element",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/aria-allowed-role?application=axeAPI",
      nodes: [],
    },
    {
      id: "aria-hidden-focus",
      impact: null,
      tags: ["cat.name-role-value", "wcag2a", "wcag412", "wcag131"],
      description:
        "Ensures aria-hidden elements do not contain focusable elements",
      help: "ARIA hidden element must not contain focusable elements",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/aria-hidden-focus?application=axeAPI",
      nodes: [],
    },
    {
      id: "aria-input-field-name",
      impact: null,
      tags: ["wcag2a", "wcag412"],
      description: "Ensures every ARIA input field has an accessible name",
      help: "ARIA input fields must have an accessible name",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/aria-input-field-name?application=axeAPI",
      nodes: [],
    },
    {
      id: "aria-required-attr",
      impact: null,
      tags: ["cat.aria", "wcag2a", "wcag412"],
      description:
        "Ensures elements with ARIA roles have all required ARIA attributes",
      help: "Required ARIA attributes must be provided",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/aria-required-attr?application=axeAPI",
      nodes: [],
    },
    {
      id: "aria-required-children",
      impact: null,
      tags: ["cat.aria", "wcag2a", "wcag131"],
      description:
        "Ensures elements with an ARIA role that require child roles contain them",
      help: "Certain ARIA roles must contain particular children",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/aria-required-children?application=axeAPI",
      nodes: [],
    },
    {
      id: "aria-required-parent",
      impact: null,
      tags: ["cat.aria", "wcag2a", "wcag131"],
      description:
        "Ensures elements with an ARIA role that require parent roles are contained by them",
      help: "Certain ARIA roles must be contained by particular parents",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/aria-required-parent?application=axeAPI",
      nodes: [],
    },
    {
      id: "aria-roledescription",
      impact: null,
      tags: ["cat.aria", "wcag2a", "wcag412"],
      description:
        "Ensure aria-roledescription is only used on elements with an implicit or explicit role",
      help: "Use aria-roledescription on elements with a semantic role",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/aria-roledescription?application=axeAPI",
      nodes: [],
    },
    {
      id: "aria-roles",
      impact: null,
      tags: ["cat.aria", "wcag2a", "wcag412"],
      description:
        "Ensures all elements with a role attribute use a valid value",
      help: "ARIA roles used must conform to valid values",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/aria-roles?application=axeAPI",
      nodes: [],
    },
    {
      id: "aria-toggle-field-name",
      impact: null,
      tags: ["wcag2a", "wcag412"],
      description: "Ensures every ARIA toggle field has an accessible name",
      help: "ARIA toggle fields have an accessible name",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/aria-toggle-field-name?application=axeAPI",
      nodes: [],
    },
    {
      id: "aria-valid-attr-value",
      impact: null,
      tags: ["cat.aria", "wcag2a", "wcag412"],
      description: "Ensures all ARIA attributes have valid values",
      help: "ARIA attributes must conform to valid values",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/aria-valid-attr-value?application=axeAPI",
      nodes: [],
    },
    {
      id: "aria-valid-attr",
      impact: null,
      tags: ["cat.aria", "wcag2a", "wcag412"],
      description:
        "Ensures attributes that begin with aria- are valid ARIA attributes",
      help: "ARIA attributes must conform to valid names",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/aria-valid-attr?application=axeAPI",
      nodes: [],
    },
    {
      id: "autocomplete-valid",
      impact: null,
      tags: ["cat.forms", "wcag21aa", "wcag135"],
      description:
        "Ensure the autocomplete attribute is correct and suitable for the form field",
      help: "autocomplete attribute must be used correctly",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/autocomplete-valid?application=axeAPI",
      nodes: [],
    },
    {
      id: "avoid-inline-spacing",
      impact: null,
      tags: ["wcag21aa", "wcag1412"],
      description:
        "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
      help: "Inline text spacing must be adjustable with custom stylesheets",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/avoid-inline-spacing?application=axeAPI",
      nodes: [],
    },
    {
      id: "blink",
      impact: null,
      tags: [
        "cat.time-and-media",
        "wcag2a",
        "wcag222",
        "section508",
        "section508.22.j",
      ],
      description: "Ensures <blink> elements are not used",
      help: "<blink> elements are deprecated and must not be used",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/blink?application=axeAPI",
      nodes: [],
    },
    {
      id: "button-name",
      impact: null,
      tags: [
        "cat.name-role-value",
        "wcag2a",
        "wcag412",
        "section508",
        "section508.22.a",
      ],
      description: "Ensures buttons have discernible text",
      help: "Buttons must have discernible text",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/button-name?application=axeAPI",
      nodes: [],
    },
    {
      id: "color-contrast",
      impact: null,
      tags: ["cat.color", "wcag2aa", "wcag143"],
      description:
        "Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",
      help: "Elements must have sufficient color contrast",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/color-contrast?application=axeAPI",
      nodes: [],
    },
    {
      id: "definition-list",
      impact: null,
      tags: ["cat.structure", "wcag2a", "wcag131"],
      description: "Ensures <dl> elements are structured correctly",
      help:
        "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/definition-list?application=axeAPI",
      nodes: [],
    },
    {
      id: "dlitem",
      impact: null,
      tags: ["cat.structure", "wcag2a", "wcag131"],
      description: "Ensures <dt> and <dd> elements are contained by a <dl>",
      help: "<dt> and <dd> elements must be contained by a <dl>",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/dlitem?application=axeAPI",
      nodes: [],
    },
    {
      id: "document-title",
      impact: null,
      tags: ["cat.text-alternatives", "wcag2a", "wcag242", "ACT"],
      description:
        "Ensures each HTML document contains a non-empty <title> element",
      help: "Documents must have <title> element to aid in navigation",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/document-title?application=axeAPI",
      nodes: [],
    },
    {
      id: "duplicate-id-active",
      impact: null,
      tags: ["cat.parsing", "wcag2a", "wcag411"],
      description:
        "Ensures every id attribute value of active elements is unique",
      help: "IDs of active elements must be unique",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/duplicate-id-active?application=axeAPI",
      nodes: [],
    },
    {
      id: "duplicate-id-aria",
      impact: null,
      tags: ["cat.parsing", "wcag2a", "wcag411"],
      description:
        "Ensures every id attribute value used in ARIA and in labels is unique",
      help: "IDs used in ARIA and labels must be unique",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/duplicate-id-aria?application=axeAPI",
      nodes: [],
    },
    {
      id: "duplicate-id",
      impact: null,
      tags: ["cat.parsing", "wcag2a", "wcag411"],
      description: "Ensures every id attribute value is unique",
      help: "id attribute value must be unique",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/duplicate-id?application=axeAPI",
      nodes: [],
    },
    {
      id: "empty-heading",
      impact: null,
      tags: ["cat.name-role-value", "best-practice"],
      description: "Ensures headings have discernible text",
      help: "Headings must not be empty",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/empty-heading?application=axeAPI",
      nodes: [],
    },
    {
      id: "form-field-multiple-labels",
      impact: null,
      tags: ["cat.forms", "wcag2a", "wcag332"],
      description: "Ensures form field does not have multiple label elements",
      help: "Form field should not have multiple label elements",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/form-field-multiple-labels?application=axeAPI",
      nodes: [],
    },
    {
      id: "frame-tested",
      impact: null,
      tags: ["cat.structure", "review-item", "best-practice"],
      description:
        "Ensures <iframe> and <frame> elements contain the axe-core script",
      help: "Frames must be tested with axe-core",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/frame-tested?application=axeAPI",
      nodes: [],
    },
    {
      id: "frame-title-unique",
      impact: null,
      tags: ["cat.text-alternatives", "best-practice"],
      description:
        "Ensures <iframe> and <frame> elements contain a unique title attribute",
      help: "Frames must have a unique title attribute",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/frame-title-unique?application=axeAPI",
      nodes: [],
    },
    {
      id: "frame-title",
      impact: null,
      tags: [
        "cat.text-alternatives",
        "wcag2a",
        "wcag241",
        "wcag412",
        "section508",
        "section508.22.i",
      ],
      description:
        "Ensures <iframe> and <frame> elements contain a non-empty title attribute",
      help: "Frames must have title attribute",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/frame-title?application=axeAPI",
      nodes: [],
    },
    {
      id: "heading-order",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the order of headings is semantically correct",
      help: "Heading levels should only increase by one",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/heading-order?application=axeAPI",
      nodes: [],
    },
    {
      id: "html-has-lang",
      impact: null,
      tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
      description: "Ensures every HTML document has a lang attribute",
      help: "<html> element must have a lang attribute",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/html-has-lang?application=axeAPI",
      nodes: [],
    },
    {
      id: "html-lang-valid",
      impact: null,
      tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
      description:
        "Ensures the lang attribute of the <html> element has a valid value",
      help: "<html> element must have a valid value for the lang attribute",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/html-lang-valid?application=axeAPI",
      nodes: [],
    },
    {
      id: "html-xml-lang-mismatch",
      impact: null,
      tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
      description:
        "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
      help:
        "HTML elements with lang and xml:lang must have the same base language",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/html-xml-lang-mismatch?application=axeAPI",
      nodes: [],
    },
    {
      id: "identical-links-same-purpose",
      impact: null,
      tags: ["wcag2aaa", "wcag249", "best-practice"],
      description:
        "Ensure that links with the same accessible name serve a similar purpose",
      help: "Links with the same name have a similar purpose",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/identical-links-same-purpose?application=axeAPI",
      nodes: [],
    },
    {
      id: "input-button-name",
      impact: null,
      tags: [
        "cat.name-role-value",
        "wcag2a",
        "wcag412",
        "section508",
        "section508.22.a",
      ],
      description: "Ensures input buttons have discernible text",
      help: "Input buttons must have discernible text",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/input-button-name?application=axeAPI",
      nodes: [],
    },
    {
      id: "input-image-alt",
      impact: null,
      tags: [
        "cat.text-alternatives",
        "wcag2a",
        "wcag111",
        "section508",
        "section508.22.a",
        "ACT",
      ],
      description: 'Ensures <input type="image"> elements have alternate text',
      help: "Image buttons must have alternate text",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/input-image-alt?application=axeAPI",
      nodes: [],
    },
    {
      id: "label-title-only",
      impact: null,
      tags: ["cat.forms", "best-practice"],
      description:
        "Ensures that every form element is not solely labeled using the title or aria-describedby attribuible label",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/label-title-only?application=axeAPI",
      nodes: [],
    },
    {
      id: "label",
      impact: null,
      tags: [
        "cat.forms",
        "wcag2a",
        "wcag412",
        "wcag131",
        "section508",
        "section508.22.n",
      ],
      description: "Ensures every form element has a label",
      help: "Form elements must have labels",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/label?application=axeAPI",
      nodes: [],
    },
    {
      id: "landmark-banner-is-top-level",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the banner landmark is at top level",
      help: "Banner landmark must not be contained in another landmark",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/landmark-banner-is-top-level?application=axeAPI",
      nodes: [],
    },
    {
      id: "landmark-complementary-is-top-level",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description:
        "Ensures the complementary landmark or aside is at top level",
      help: "Aside must not be contained in another landmark",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/landmark-complementary-is-top-level?application=axeAPI",
      nodes: [],
    },
    {
      id: "landmark-contentinfo-is-top-level",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the contentinfo landmark is at top level",
      help: "Contentinfo landmark must not be contained in another landmark",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/landmark-contentinfo-is-top-level?application=axeAPI",
      nodes: [],
    },
    {
      id: "landmark-main-is-top-level",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the main landmark is at top level",
      help: "Main landmark must not be contained in another landmark",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/landmark-main-is-top-level?application=axeAPI",
      nodes: [],
    },
    {
      id: "landmark-no-duplicate-banner",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the document has at most one banner landmark",
      help: "Document must not have more than one banner landmark",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/landmark-no-duplicate-banner?application=axeAPI",
      nodes: [],
    },
    {
      id: "landmark-no-duplicate-contentinfo",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the document has at most one contentinfo landmark",
      help: "Document must not have more than one contentinfo landmark",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/landmark-no-duplicate-contentinfo?application=axeAPI",
      nodes: [],
    },
    {
      id: "landmark-no-duplicate-main",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the document has at most one main landmark",
      help: "Document must not have more than one main landmark",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/landmark-no-duplicate-main?application=axeAPI",
      nodes: [],
    },
    {
      id: "landmark-one-main",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description: "Ensures the document has a main landmark",
      help: "Document must have one main landmark",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/landmark-one-main?application=axeAPI",
      nodes: [],
    },
    {
      id: "landmark-unique",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      help: "Ensures landmarks are unique",
      description:
        "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/landmark-unique?application=axeAPI",
      nodes: [],
    },
    {
      id: "link-name",
      impact: null,
      tags: [
        "cat.name-role-value",
        "wcag2a",
        "wcag412",
        "wcag244",
        "section508",
        "section508.22.a",
      ],
      description: "Ensures links have discernible text",
      help: "Links must have discernible text",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/link-name?application=axeAPI",
      nodes: [],
    },
    {
      id: "list",
      impact: null,
      tags: ["cat.structure", "wcag2a", "wcag131"],
      description: "Ensures that lists are structured correctly",
      help:
        "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/list?application=axeAPI",
      nodes: [],
    },
    {
      id: "listitem",
      impact: null,
      tags: ["cat.structure", "wcag2a", "wcag131"],
      description: "Ensures <li> elements are used semantically",
      help: "<li> elements must be contained in a <ul> or <ol>",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/listitem?application=axeAPI",
      nodes: [],
    },
    {
      id: "marquee",
      impact: null,
      tags: ["cat.parsing", "wcag2a", "wcag222"],
      description: "Ensures <marquee> elements are not used",
      help: "<marquee> elements are deprecated and must not be used",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/marquee?application=axeAPI",
      nodes: [],
    },
    {
      id: "meta-refresh",
      impact: null,
      tags: [
        "cat.time-and-media",
        "wcag2a",
        "wcag2aaa",
        "wcag221",
        "wcag224",
        "wcag325",
      ],
      description: 'Ensures <meta http-equiv="refresh"> is not used',
      help: "Timed refresh must not exist",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/meta-refresh?application=axeAPI",
      nodes: [],
    },
    {
      id: "meta-viewport-large",
      impact: null,
      tags: ["cat.sensory-and-visual-cues", "best-practice"],
      description:
        'Ensures <meta name="viewport"> can scale a significant amount',
      help: "Users should be able to zoom and scale the text up to 500%",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/meta-viewport-large?application=axeAPI",
      nodes: [],
    },
    {
      id: "meta-viewport",
      impact: null,
      tags: ["cat.sensory-and-visual-cues", "best-practice"],
      description:
        'Ensures <meta name="viewport"> does not disable text scaling and zooming',
      help: "Zooming and scaling must not be disabled",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/meta-viewport?application=axeAPI",
      nodes: [],
    },
    {
      id: "object-alt",
      impact: null,
      tags: [
        "cat.text-alternatives",
        "wcag2a",
        "wcag111",
        "section508",
        "section508.22.a",
      ],
      description: "Ensures <object> elements have alternate text",
      help: "<object> elements must have alternate text",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/object-alt?application=axeAPI",
      nodes: [],
    },
    {
      id: "page-has-heading-one",
      impact: null,
      tags: ["cat.semantics", "best-practice"],
      description:
        "Ensure that the page, or at least one of its frames contains a level-one heading",
      help: "Page must contain a level-one heading",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/page-has-heading-one?application=axeAPI",
      nodes: [],
    },
    {
      id: "role-img-alt",
      impact: null,
      tags: [
        "cat.text-alternatives",
        "wcag2a",
        "wcag111",
        "section508",
        "section508.22.a",
      ],
      description: "Ensures [role='img'] elements have alternate text",
      help: "[role='img'] elements have an alternative text",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/role-img-alt?application=axeAPI",
      nodes: [],
    },
    {
      id: "scope-attr-valid",
      impact: null,
      tags: ["cat.tables", "best-practice"],
      description: "Ensures the scope attribute is used correctly on tables",
      help: "scope attribute should be used correctly",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/scope-attr-valid?application=axeAPI",
      nodes: [],
    },
    {
      id: "scrollable-region-focusable",
      impact: null,
      tags: ["wcag2a", "wcag211"],
      description:
        "Elements that have scrollable content should be accessible by keyboard",
      help: "Ensure that scrollable region has keyboard access",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/scrollable-region-focusable?application=axeAPI",
      nodes: [],
    },
    {
      id: "server-side-image-map",
      impact: null,
      tags: [
        "cat.text-alternatives",
        "wcag2a",
        "wcag211",
        "section508",
        "section508.22.f",
      ],
      description: "Ensures that server-side image maps are not used",
      help: "Server-side image maps must not be used",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/server-side-image-map?application=axeAPI",
      nodes: [],
    },
    {
      id: "skip-link",
      impact: null,
      tags: ["cat.keyboard", "best-practice"],
      description: "Ensure all skip links have a focusable target",
      help: "The skip-link target should exist and be focusable",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/skip-link?application=axeAPI",
      nodes: [],
    },
    {
      id: "svg-img-alt",
      impact: null,
      tags: [
        "cat.text-alternatives",
        "wcag2a",
        "wcag111",
        "section508",
        "section508.22.a",
      ],
      description:
        "Ensures svg elements with an img, graphics-document or graphics-symbol role have an accessible text",
      help: "svg elements with an img role have an alternative text",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/svg-img-alt?application=axeAPI",
      nodes: [],
    },
    {
      id: "tabindex",
      impact: null,
      tags: ["cat.keyboard", "best-practice"],
      description: "Ensures tabindex attribute values are not greater than 0",
      help: "Elements should not have tabindex greater than zero",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/tabindex?application=axeAPI",
      nodes: [],
    },
    {
      id: "table-duplicate-name",
      impact: null,
      tags: ["cat.tables", "best-practice"],
      description:
        "Ensure that tables do not have the same summary and caption",
      help:
        "The <caption> element should not contain the same text as the summary attribute",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/table-duplicate-name?application=axeAPI",
      nodes: [],
    },
    {
      id: "td-headers-attr",
      impact: null,
      tags: [
        "cat.tables",
        "wcag2a",
        "wcag131",
        "section508",
        "section508.22.g",
      ],
      description:
        "Ensure that each cell in a table using the headers refers to another cell in that table",
      help:
        "All cells in a table element that use the headers attribute must only refer to other cells of that same table",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/td-headers-attr?application=axeAPI",
      nodes: [],
    },
    {
      id: "th-has-data-cells",
      impact: null,
      tags: [
        "cat.tables",
        "wcag2a",
        "wcag131",
        "section508",
        "section508.22.g",
      ],
      description:
        "Ensure that each table header in a data table refers to data cells",
      help:
        "All th elements and elements with role=columnheader/rowheader must have data cells they describe",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/th-has-data-cells?application=axeAPI",
      nodes: [],
    },
    {
      id: "valid-lang",
      impact: null,
      tags: ["cat.language", "wcag2aa", "wcag312"],
      description: "Ensures lang attributes have valid values",
      help: "lang attribute must have a valid value",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/valid-lang?application=axeAPI",
      nodes: [],
    },
    {
      id: "video-caption",
      impact: null,
      tags: [
        "cat.text-alternatives",
        "wcag2a",
        "wcag122",
        "section508",
        "section508.22.a",
      ],
      description: "Ensures <video> elements have captions",
      help: "<video> elements must have captions",
      helpUrl:
        "https://dequeuniversity.com/rules/axe/4.0/video-caption?application=axeAPI",
      nodes: [],
    },
  ],
};

describe("utils", () => {
  it("tests the mount function", () => {
    const html = `<p> hi there </p>`;
    const result = utils.mount(html);
    expect(typeof result[0]).toBe('object');
    expect(typeof result[1]).toBe('function');
  });
  it('should normalize the build', () => {
      const normal = utils.normaliseBuild('1234', fixture);
      expect(normal.projectId).toBe('1234');
      expect(normal.issues.length).toBe(2);
      expect(normal.status).toBe('MODERATE');
  })
});
