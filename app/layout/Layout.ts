import {
  BodyNode,
  DomNode,
  el,
  MaterialIcon,
  NavBar,
  View,
  ViewParams,
} from "@common-module/app";
import TitleBar from "./TitleBar.js";

export default class Layout extends View {
  private static current: Layout;

  public static append(node: DomNode): void {
    Layout.current.content.append(node);
  }

  private navBar: NavBar;
  private titleBar: TitleBar;
  private content: DomNode;

  constructor(params: ViewParams, uri: string) {
    super();
    Layout.current = this;

    BodyNode.append(
      this.container = el(
        ".layout",
        this.navBar = new NavBar({
          logo: el("img", { src: "/images/logo-transparent.png" }),
          menu: [
            {
              id: "profile",
              icon: new MaterialIcon("person"),
              title: "프로필 설정",
              uri: "/profile",
            },
            {
              id: "convert",
              icon: new MaterialIcon("transform"),
              title: "변환하기",
              uri: "/convert",
            },
            {
              id: "donate",
              icon: new MaterialIcon("donate"),
              title: "기부하기",
              uri: "/donate",
            },
            {
              id: "trade",
              icon: new MaterialIcon("trade"),
              title: "거래하기",
              uri: "/trade",
            },
          ],
        }),
        el(
          "main",
          this.titleBar = new TitleBar(),
          this.content = el("section.content"),
        ),
      ),
    );

    this.changeUri(uri);
  }

  public changeParams(params: ViewParams, uri: string): void {
    this.changeUri(uri);
  }

  private changeUri(uri: string): void {
    this.navBar.active(
      uri === "" ? "posts" : uri.substring(
        0,
        uri.indexOf("/") === -1 ? uri.length : uri.indexOf("/"),
      ),
    );
    this.titleBar.changeTitle(uri);
  }
}
