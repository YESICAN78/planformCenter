/*
 * @Author: SunFulin
 * @Date: 2022-08-07 16:37:34
 * @LastEditTime: 2022-08-07 22:02:59
 * @LastEditors: Dragon
 */
import { Menu } from "antd";
import { OldSchoolMenuLink } from "../../router/utils";
const SubMenu = Menu.SubMenu;
const ItemMenu = Menu.Item;
const myMenu = (item) => (
  <ItemMenu key={item.path}>
    <OldSchoolMenuLink route={item}></OldSchoolMenuLink>
  </ItemMenu>
);
const slideMenu = (routes) =>
  Array.isArray(routes) &&
  routes.map(
    (item) =>
      (!Array.isArray(item.routes) && myMenu(item)) || (
        <SubMenu
          key={item.path}
          title={<OldSchoolMenuLink route={item}></OldSchoolMenuLink>}
        >
          {slideMenu(item.routes)}
        </SubMenu>
      )
  );
export default slideMenu;
