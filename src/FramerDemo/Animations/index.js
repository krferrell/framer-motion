import Drag from "./Drag/Drag";
import Hover from "./Hover/Hover";
import Modal from "./Modal/Modal";
import Staggered from "./Staggered";
import Svg from "./SVG/SVG";

import { dragString } from "./Drag/dragString";
import { hoverString } from "./Hover/hoverString";
import { modalString } from "./Modal/modalString";
import { staggeredCodeblockString } from "./Staggered/staggeredCodeblockString";
import { svgString } from "./SVG/svgString";

export const animations = [
  {
    name: `Drag`,
    component: <Drag />,
    codeblockString: dragString,
  },
  {
    name: `Hover`,
    component: <Hover />,
    codeblockString: hoverString,
  },
  {
    name: `Modal`,
    component: <Modal />,
    codeblockString: modalString,
  },
  {
    name: `Staggered`,
    component: <Staggered />,
    codeblockString: staggeredCodeblockString,
  },
  {
    name: `SVG`,
    component: <Svg />,
    codeblockString: svgString,
  },
];
