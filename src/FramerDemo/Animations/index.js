import Svg from "./SVG/SVG"
import { navString } from "./SVG/svgString"

import Drag from "./Drag/Drag"
import { dragString } from "./Drag/dragString"

import Hover from "./Hover/Hover"
import { hoverString } from "./Hover/hoverString";

import Staggered from "./Staggered"
import { staggeredString } from "./Staggered/staggeredString"

import Modal from "./Modal/Modal";
import {modalString} from "./Modal/modalString";

export const animations = [
    {
        name: `SVG`,
        comp: Svg,
        codeblockString: navString,
        refresh: true,
    },

    {
        name: `Drag`,
        comp: Drag,
        codeblockString: dragString,
        refresh: false,
    },

    {
        name: `Hover`,
        comp: Hover,
        codeblockString: hoverString,
        refresh: false,
    },

    {
        name: `Staggered`,
        comp: Staggered,
        codeblockString: staggeredString,
        refresh: true,
    },

    {
        name: `Modal`,
        comp: Modal,
        codeblockString: modalString,
        refresh: false,
    },

]