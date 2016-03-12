export default function ({ types: t, template }) {
  const buildIsoBmff = template(`
    IsoBmff.createElement(BOX_NAME, PROP_OBJ, CHILDREN)
  `);

  const parseValue = (val) => {
    if (t.isJSXExpressionContainer(val)) {
      return val.expression;
    }
    return val;
  };

  let stack = [];

  return {
    inherits: require('babel-plugin-syntax-jsx'),
    visitor: {
      JSXElement: {
        enter: function(path) {
          const node = path.node;
          const opening = node.openingElement;
          const attrs = opening.attributes;
          const children = [];

          let name = opening.name.name;
          let props = {};

          if (name === 'url' || name === 'urn') {
            name += ' ';
          }

          attrs.forEach((attr) => {
            props[attr.name.name] = parseValue(attr.value);
          });

          stack.push({name, props, children});
        },
        exit: function(path) {
          const elem = stack.pop();

          const node = buildIsoBmff({
            BOX_NAME: t.stringLiteral(elem.name),
            PROP_OBJ: t.objectExpression(
              Object.keys(elem.props).map(function (key) {
                return t.objectProperty(t.stringLiteral(key), elem.props[key]);
              })
            ),
            CHILDREN: elem.children.length === 0 ? t.nullLiteral() : t.sequenceExpression(elem.children)
          }).expression;

          const parent = stack.pop();

          if (parent) {
            parent.children.push(node);
            stack.push(parent);
          }
          path.replaceWith(node);
        }
      }
    }
  };
}
