// import React, { useState } from "react";
// import styles from "./style.module.css";
// import { Link } from "react-router-dom";

// const MenuItem = ({ item }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleMenuItemClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const hasChildren = item?.children?.length > 0;

//   return (
//     <div className={styles.menuItem}>
//       <Link
//         to={item.path}
//         onClick={handleMenuItemClick}
//         className={hasChildren ? styles.menuItemWithChildren : ""}
//       >
//         {item.title}
//       </Link>
//       {hasChildren && (
//         <div
//           className={`${styles.menuItem_children} ${isOpen ? styles.open : ""}`}
//         >
//           {item.children.map((child, index) => (
//             <div key={index} className={styles.mic_item}>
//               <Link to={child.path}>{child.title}</Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuItem;

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const MenuItem = ({ item, isOpen, onMenuItemClick }) => {
  const hasChildren = item?.children?.length > 0;

  return (
    <div className={styles.menuItem}>
      <NavLink
        to={item.path}
        onClick={(e) => {
          // e.preventDefault();
          if (hasChildren) {
            onMenuItemClick();
          }
        }}
        className={`${hasChildren ? styles.menuItemWithChildren : ""} ${
          isOpen ? styles.open : ""
        }`}
      >
        {item.title}
      </NavLink>
      {hasChildren && (
        <div
          className={`${styles.menuItem_children} ${isOpen ? styles.open : ""}`}
        >
          {item.children.map((child, index) => (
            <div key={index} className={styles.mic_item}>
              <NavLink to={child.path}>{child.title}</NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
