import { Component, Host, h, Prop } from "@stencil/core";
import { parse } from "marked";

@Component({ tag: "d-markdown"})
export class MarkdownRenderer {

  @Prop() markdown: string;
  
  render() {
    return <Host>{parse(this.markdown)}</Host>;
  }

}
