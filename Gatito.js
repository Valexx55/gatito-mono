export class Gatito extends HTMLElement {

    constructor() {
        super();
        
        let shadow = this.attachShadow({ mode: 'open' });
        let tpl = Gatito.template;
        let clone = document.importNode(tpl.content, true);
        shadow.appendChild(clone);
      }
    
      connectedCallback() {
        console.log ("ha de mostrarse el gato cc llamado");
      }

      static get template() {
        let template = document.createElement('template');
        template.innerHTML = `
        <img src="https://placekitten.com/280/330" alt="https://placekitten.com/280/330">`;
        return template;
      }
}