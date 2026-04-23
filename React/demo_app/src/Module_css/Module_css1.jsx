
/*
CSS Modules
Another way of adding styles to your application is to use CSS Modules.
CSS Modules are convenient for components that are placed in separate files.
The CSS inside a module is available only for the component that imported it, 
and you do not have to worry about name conflicts.


Create the CSS module with the .module.css extension, 

example: my-style.module.css.

import : import A from './mycss1.module.css';
apply: <div className={A.big_blue}></div>

*/


import React from 'react'

import './normal_style.css'  // NORMAL CSS IMPORT

import A from './style1.module.css'; // module css import
import B from './style2.module.css'; // module css import

function Module_css1() {
  return (
    <div className='container'>

        <div className='big_box'>Normal Css Apply</div>
        <hr />

        <div className={A.big_blue}>Hello i am From Module CSS 1</div>
        <div className={B.big_blue}>Hello i am From Module CSS 2</div>
        <div className='big_blue'>module class not work withaot import name</div>

    </div>
  )
}

export default Module_css1