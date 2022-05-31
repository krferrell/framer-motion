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

import Toggle from "./Toggle/Toggle"
import { toggleString } from "./Toggle/toggleString"

export const animations = [
    {
        name: `SVG`,
        comp: Svg,
        codeblockString: navString,
    },

    {
        name: `Drag`,
        comp: Drag,
        codeblockString: dragString,
    },

    {
        name: `Hover`,
        comp: Hover,
        codeblockString: hoverString,
    },

    {
        name: `Staggered`,
        comp: Staggered,
        codeblockString: staggeredString,
    },

    {
        name: `Modal`,
        comp: Modal,
        codeblockString: modalString,
    },
    {
        name: `Toggle`,
        comp: Toggle,
        codeblockString: toggleString,
    },

]