import React from 'react';

function Header() {
    return (
        <header className="principal">
        <div className="toolbar">
           <div>
             <a href="/">New Devan - Alteração </a>
           </div>
            <div>
             <button>Novo Post</button>
             <span>Img1</span>
             <span>Img2</span>
         </div>  
        </div>
     </header>
    );
}

export default Header;