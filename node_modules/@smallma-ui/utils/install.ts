interface Component {
  name: string;
  [key: string]: any;
}
export const installComponent = (component: Component) => {
  component.install = (app: any) => {
    app.component(component.name, component);
  };

  return component;
};
