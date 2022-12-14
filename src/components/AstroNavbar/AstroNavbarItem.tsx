import * as React from "react";
import styles from "./AstroNavbarItem.module.scss";

export interface AstroNavbarItemProps {
  /**
   * The content for the AstroNavbarItem
   */
  children: React.ReactNode;
  /**
   * The url link for the AstroNavbarItem
   */
  link: string;
}

const AstroNavbarItem: React.FC<AstroNavbarItemProps> = (props) => {
  const { children, link } = props;
  return (
      <a className={styles.astroNavbarItemLinkContainer} href={link}>
        {children}
      </a>
  );
};
export default AstroNavbarItem;
