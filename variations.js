wp.blocks.registerBlockVariation("core/spacer", {
  name: "themeslug/spacer",
  title: wp.i18n.__("Theme Name: Spacer", "example-block-variation"),
  keywords: ["space", "spacer", "spacing"],
  scope: ["block", "inserter", "transform"],
  attributes: {
    height: "180px",
  },
  isActive: (blockAttributes) =>
    blockAttributes.height && "180px" === blockAttributes.height,
});

wp.blocks.registerBlockVariation(
  'core/paragraph',
  {
      name: 'paragraph-red',
      title: 'Red Paragraph',
      scope: ["block", "inserter", "transform"],
      attributes: {
          textColor: 'vivid-red',
      },
      isActive: [ 'textColor' ],
  }
);

wp.blocks.registerBlockVariation(
  'core/paragraph',
  {
      name: 'paragraph-red-grey',
      title: 'Red/Grey Paragraph',
      scope: ["block", "inserter", "transform"],
      attributes: {
          textColor: 'vivid-red',
          backgroundColor: 'cyan-bluish-gray'
      },
      isActive: [ 'textColor', 'backgroundColor' ]
  }
);

wp.blocks.registerBlockVariation(
  'core/query',
  {
      name: 'custom-query',
      title: 'Custom Query Loop',
      scope: ["block", "inserter", "transform"],
      attributes: {
        namespace: 'custom',
      },
      isActive: [ 'namespace' ]
  }
);

wp.blocks.registerBlockVariation(
  'core/quote',
  {
      name: 'quote-blue',
      title: 'Blue Quote',
      attributes: {
          color: 'blue',
          className: 'is-style-blue-quote'
      },
      isActive: [ 'color' ],
  }
);
