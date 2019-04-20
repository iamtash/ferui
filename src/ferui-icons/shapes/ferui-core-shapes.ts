import { IconShapeSources } from '@clr/icons/interfaces/icon-interfaces';
import { feruiIconSVG } from '../utils/svg-tag-generator';

interface Window {
  ClarityIcons: any;
}

declare var window: Window;

const feruiShape: IconShapeSources = {};

/* tslint:disable */
feruiShape['fui-active-task'] = feruiIconSVG(`
  <path class="fui-active-task-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M18.889 11.322h-3.902c-.68-.14-.68-.342-1.068-.91L12.563 7.14 8.96 16.267c-.244.424-.54.712-.962.733-.348-.009-.79.013-1.196-.754l-1.898-4.924H1.111c-.614 0-1.111-.52-1.111-1.16 0-.64.497-1.16 1.111-1.16h4.583c.7.15.7.033 1.083.63l1.14 3.067 3.546-8.982c.074-.422.432-.717 1.1-.717.59.007.903.292 1.043.7l2.14 5.302h3.143c.614 0 1.111.52 1.111 1.16 0 .64-.497 1.16-1.111 1.16z"/>`);

feruiShape['fui-add'] = feruiIconSVG(`
  <path class="fui-add-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M18.366166 8.366013C19.269571 8.366013 20 9.094606 20 10c0 .90314-.729376 1.633987-1.633834 1.633987h-6.732179v6.73218C11.633987 19.26957 10.905394 20 10 20c-.903139 0-1.633987-.729376-1.633987-1.633834v-6.73218H1.633834C.730429 11.633987 0 10.905395 0 10c0-.90314.729376-1.633987 1.633834-1.633987h6.732179v-6.73218C8.366013.73043 9.094606 0 10 0c.903139 0 1.633987.729376 1.633987 1.633834v6.73218h6.732179z"/>`);

feruiShape['fui-caret'] = feruiIconSVG(`
  <path class="fui-caret-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M2.9972 16.5c.667 0 1.2945-.2704 1.7684-.7638l5.2842-5.5454c.1186-.1235.2754-.1905.4415-.1905.1673 0 .3234.067.4402.1892l5.3041 5.5487c.4715.4914 1.099.7618 1.7666.7618.6669 0 1.2939-.2704 1.766-.7618.4714-.4908.7318-1.1434.7318-1.8383 0-.6943-.2604-1.3469-.725-1.8305l-7.0763-7.6171C12.1098 3.838 11.3255 3.5 10.4913 3.5c-.8343 0-1.6186.338-2.2175.9614l-6.039 6.555-1.003 1.0445C.7599 12.5524.5 13.2056.5 13.9c0 .6942.2598 1.3475.7312 1.8383.4721.4914 1.0997.7618 1.766.7618z"/>`);

feruiShape['fui-arrow-thin'] = feruiIconSVG(`
  <path class="fui-arrow-thin-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M8.4602 18.5034c0 .8317.673 1.4966 1.5387 1.4966.8717 0 1.5962-.67 1.5962-1.4966v-13.4l1.7241 1.6722c.6133.585 1.6094.5885 2.2215.0045.6164-.588.61-1.5327-.0047-2.1192L11.1073.4361c-.3074-.2932-.7078-.4387-1.1095-.436-.4012-.0003-.802.1448-1.112.4406l-4.424 4.2202c-.6132.585-.6168 1.5353-.0046 2.1192.6163.588 1.6067.582 2.2214-.0045l1.7529-1.6722.0287 13.4z"/>`);

feruiShape['fui-step-forward'] = feruiIconSVG(`
  <path class="fui-step-forward-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M0 2.5C0 1.83.28 1.2.78.73S1.95 0 2.67 0c.7 0 1.38.26 1.88.73l1.07 1 6.73 6.04a3 3 0 0 1 0 4.42l-7.8 7.09c-.5.46-1.17.72-1.88.72-.72 0-1.39-.26-1.89-.73a2.4 2.4 0 0 1 0-3.53l5.7-5.3a.6.6 0 0 0 0-.89L.77 4.27A2.4 2.4 0 0 1 0 2.5zm20 15a2.5 2.5 0 1 1-5 0v-15a2.5 2.5 0 1 1 5 0v15z"/>`);

feruiShape['fui-solid-arrow'] = feruiIconSVG(`
  <path class="fui-solid-arrow-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M2.4972 17h15.005c.6669 0 1.2939-.2912 1.766-.8204.4714-.5286.7318-1.2314.7318-1.9797 0-.7477-.2604-1.4505-.725-1.9713l-7.0763-8.203C11.6098 3.364 10.8255 3 9.9913 3c-.8343 0-1.6186.364-2.2175 1.0354l-6.039 7.0591-1.003 1.125C.2599 12.7487 0 13.4522 0 14.1999c0 .7476.2598 1.4511.7312 1.9797.4721.5292 1.0997.8204 1.766.8204z"/>`);

feruiShape['fui-breadcrumb'] = feruiIconSVG(`
  <path class="fui-breadcrumb-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M0 2.8C0 1.8.8 1 1.8 1h16.4a1.8 1.8 0 0 1 0 3.6H1.8C.8 4.6 0 3.8 0 2.8zM3.64 10c0-1 .8-1.8 1.8-1.8H18.2a1.8 1.8 0 0 1 0 3.6H5.43c-.99 0-1.8-.8-1.8-1.8zm3.63 7.2c0-1 .8-1.8 1.8-1.8h9.13c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8H9.07c-1 0-1.8-.8-1.8-1.8z"/>`);

feruiShape['fui-burgermenu'] = feruiIconSVG(`
  <path class="fui-burgermenu-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M0 10c0-.68.56-1.22 1.22-1.22h17.56c.67 0 1.22.54 1.22 1.22 0 .68-.56 1.22-1.22 1.22H1.22C.55 11.22 0 10.68 0 10zm0-5.78C0 3.55.56 3 1.22 3h17.56c.67 0 1.22.54 1.22 1.22 0 .68-.56 1.23-1.22 1.23H1.22C.55 5.45 0 4.91 0 4.22zm0 11.56c0-.68.56-1.23 1.22-1.23h17.56a1.23 1.23 0 0 1 0 2.45H1.22C.55 17 0 16.46 0 15.78z"/>`);

feruiShape['fui-calendar'] = feruiIconSVG(`
  <path class="fui-calendar-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M17.1 6.67v-1.9a.95.95 0 0 0-.95-.96v.01c0 .52-.42.94-.95.94a.95.95 0 0 1-.95-.94v-.01h-1.9v.01c0 .52-.42.94-.95.94a.95.95 0 0 1-.95-.94v-.01h-1.9v.01c0 .52-.42.94-.95.94a.95.95 0 0 1-.95-.94v-.01h-1.9v.01c0 .52-.42.94-.95.94a.95.95 0 0 1-.95-.94v-.01a.95.95 0 0 0-.95.95v1.9h15.2zm0 1.9H1.9v8.57c0 .53.42.96.95.96h13.3c.53 0 .95-.43.95-.96V8.57zm-.95-6.67A2.85 2.85 0 0 1 19 4.76v12.38A2.85 2.85 0 0 1 16.15 20H2.85A2.85 2.85 0 0 1 0 17.14V4.76A2.85 2.85 0 0 1 2.85 1.9V.94c0-.52.42-.94.95-.94.52 0 .95.42.95.94v.96h1.9V.94c0-.52.42-.94.95-.94.52 0 .95.42.95.94v.96h1.9V.94c0-.52.42-.94.95-.94.52 0 .95.42.95.94v.96h1.9V.94c0-.52.42-.94.95-.94.52 0 .95.42.95.94v.96z"/>
  <path class="fui-calendar-icon-badged clr-i-outline--badged clr-i-outline-path-1--badged" fill-rule="evenodd" d="M18.1 6.6667V4.762c0-.5263-.424-.9525-.9453-.9525H17.15v.0116c0 .5196-.4217.9408-.95.9408-.5247 0-.95-.4226-.95-.9408v-.0116h-1.9v.0116c0 .5196-.4217.9408-.95.9408-.5247 0-.95-.4226-.95-.9408v-.0116h-1.9v.0116c0 .5196-.4217.9408-.95.9408-.5247 0-.95-.4226-.95-.9408v-.0116h-1.9v.0116c0 .5196-.4217.9408-.95.9408-.5247 0-.95-.4226-.95-.9408v-.0116h-.0047c-.5219 0-.9453.4257-.9453.9525v1.9047h15.2zm0 1.9047H2.9v8.5714c0 .5262.424.9524.9453.9524h13.3094c.5219 0 .9453-.4256.9453-.9524V8.5714zm-.95-6.6666h.0047C18.7265 1.9048 20 3.1849 20 4.762v12.3808C20 18.7204 18.727 20 17.1547 20H3.8453C2.2735 20 1 18.7199 1 17.1428V4.762c0-1.5776 1.273-2.8572 2.8453-2.8572H3.85v-.964C3.85.4212 4.2717 0 4.8 0c.5247 0 .95.4226.95.9408v.964h1.9v-.964C7.65.4212 8.0717 0 8.6 0c.5247 0 .95.4226.95.9408v.964h1.9v-.964c0-.5196.4217-.9408.95-.9408.5247 0 .95.4226.95.9408v.964h1.9v-.964c0-.5196.4217-.9408.95-.9408.5247 0 .95.4226.95.9408v.964zm-3.4455 8.4084a1.0685 1.0685 0 0 1 1.5114 0 1.066 1.066 0 0 1 0 1.51l-4.5344 4.5303c-.418.4176-1.0946.4176-1.5115 0l-2.2683-2.2651c-.418-.4165-.418-1.0925 0-1.5101.418-.4176 1.0946-.4176 1.5115 0l1.5125 1.51 3.7788-3.7751z"/>
`);

feruiShape['fui-chat'] = feruiIconSVG(`
  <path class="fui-chat-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M19 18.99c0 .98-.65 1.3-1.44.72l-4.41-5.48H2.8c-1 0-1.8-.8-1.8-1.78V1.78C1 .8 1.8 0 2.8 0h14.4c1 0 1.8.8 1.8 1.78v17.2z"/>`);

feruiShape['fui-close'] = feruiIconSVG(`
  <path class="fui-close-icon clr-i-outline clr-i-outline-path-1" d="M.59 3.41A2 2 0 1 1 3.41.6l16 16a2 2 0 1 1-2.82 2.82l-16-16zm16-2.82a2 2 0 1 1 2.82 2.82l-16 16A2 2 0 1 1 .6 16.59l16-16z"/>`);

feruiShape['fui-columns'] = feruiIconSVG(`
  <path class="fui-columns-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M3 18a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3zm0-2h2V4H3v12zm12 2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2zm0-2h2V4h-2v12zm-5 4a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1 1 1 0 0 1 1 1v18a1 1 0 0 1-1 1z"/>`);

feruiShape['fui-copy'] = feruiIconSVG(`
  <path class="fui-copy-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M12.68 4h5.37C19.13 4 20 4.9 20 6v12.33c0 1.27-1.13 2.02-2.26 1.5l-1.63-.75-2.05.85c-.23.1-.5.1-.72 0l-2.12-.85-1.64.76c-1.14.5-2.26-.24-2.26-1.51v-2.64l-.58.24c-.23.1-.49.1-.72 0l-2.12-.85-1.64.76C1.13 16.34 0 15.6 0 14.33V2C0 .9.87 0 1.95 0h8.79c1.07 0 1.94.9 1.94 2v2zm-1.95 0V2H1.96v11.8l1.6-.72c.24-.1.51-.1.75 0l2.05.83.97-.39V10H3.93a1 1 0 1 1 0-2h3.39V6H3.93a1 1 0 1 1 0-2h6.8zm7.32 2H9.27v11.8l1.6-.72c.24-.1.51-.1.75 0l2.04.83 2.1-.84c.25-.1.53-.1.77.02l1.52.7V6zm-7.8 7a1 1 0 0 1 1-1h4.82a1 1 0 1 1 0 2h-4.82a1 1 0 0 1-1-1zm0-4a1 1 0 0 1 1-1h4.82a1 1 0 1 1 0 2h-4.82a1 1 0 0 1-1-1z"/>`);

feruiShape['fui-paste'] = feruiIconSVG(`
  <path class="fui-paste-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M1 19V2c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v17a1 1 0 0 1-1.45.9l-1.54-.78-1.56.77a1 1 0 0 1-.9 0L12 19.12l-1.55.77a1 1 0 0 1-.9 0L8 19.12l-1.55.77a1 1 0 0 1-.9 0L4 19.12l-1.55.77A1 1 0 0 1 1 19zM17 2H3v15.38l.55-.28a1 1 0 0 1 .9 0l1.56.78 1.54-.78a1 1 0 0 1 .9 0l1.55.78 1.55-.78a1 1 0 0 1 .9 0l1.57.79 1.53-.79a1 1 0 0 1 .9 0l.56.28L17 2zm-7 11a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm0-4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/>`);

feruiShape['fui-detach'] = feruiIconSVG(`
  <path class="fui-detach-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M17.5 16.02V6.25a3.75 3.75 0 0 0-3.75-3.75H3.98A3.74 3.74 0 0 1 7.5 0h8.75A3.75 3.75 0 0 1 20 3.75v8.75c0 1.63-1.05 3-2.5 3.52zM16.25 7.5v8.75A3.75 3.75 0 0 1 12.5 20H3.75A3.75 3.75 0 0 1 0 16.25V7.5a3.75 3.75 0 0 1 3.75-3.75h8.75a3.75 3.75 0 0 1 3.75 3.75zM2.5 16.25c0 .7.56 1.25 1.25 1.25h8.75c.7 0 1.25-.56 1.25-1.25v-7.5H2.5v7.5zM3.75 5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"/>`);

feruiShape['fui-dragndrop'] = feruiIconSVG(`
  <path class="fui-dragndrop-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M19 0H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM5.7 11.3a1 1 0 0 1 0 1.4c-.19.2-.85.57-1.4 0l-2-2A1 1 0 0 1 2 10c0-.26.11-.52.3-.7l2-2a1 1 0 0 1 1.4 1.4L4.42 10l1.3 1.3zm7 4.4l-2 2a1.01 1.01 0 0 1-1.42 0l-1.99-2a1 1 0 0 1 1.41-1.4l1.3 1.29 1.29-1.3a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42zm0-10c-.19.2-.89.53-1.4 0L10 4.42l-1.3 1.3A1 1 0 0 1 7.3 4.3l2-2a1 1 0 0 1 1.4 0l2 2a1 1 0 0 1 0 1.4zm5 5l-2 2c-.52.54-1.21.2-1.4 0a1 1 0 0 1 0-1.4l1.29-1.3-1.3-1.3a1 1 0 0 1 1.41-1.4l2 2a1 1 0 0 1 0 1.4z"/>`);

feruiShape['fui-empty'] = feruiIconSVG(`
  <path class="fui-empty-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M19.8 5.34l-2.2-3.4c-.4-.56-1-.94-1.7-.94H4.1c-.7 0-1.3.38-1.7.94L.2 5.34c-.1.2-.2.57-.2.85v9.92C0 17.15.9 18 2 18h16c1.1 0 2-.85 2-1.89V6.2c0-.28-.1-.66-.2-.85zM13 9.5H7c-.6 0-1-.38-1-.94 0-.57.4-.95 1-.95h6c.6 0 1 .38 1 .95 0 .56-.4.94-1 .94zM2.2 5.72L3.9 2.9h12.2l1.7 2.83H2.2z"/>`);

feruiShape['fui-user'] = feruiIconSVG(`
  <path class="fui-user-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M4.36 3.68l.76-1.85C5.3 1.37 5.86 1 6.36 1h7.28c.5 0 1.06.37 1.24.83l.76 1.85h2.54c1 0 1.82.8 1.82 1.8V16.2c0 .99-.82 1.79-1.82 1.79H1.82C.82 18 0 17.2 0 16.2V5.49c0-1 .82-1.8 1.82-1.8h2.54zm-2.54 1.8V16.2h16.36V5.48H15.4a1.6 1.6 0 0 1-1.37-.93l-.72-1.76H6.69l-.72 1.76c-.2.51-.82.92-1.37.92H1.82zm3.63 4.91A4.51 4.51 0 0 1 10 5.92c2.51 0 4.55 2 4.55 4.47A4.51 4.51 0 0 1 10 14.87c-2.51 0-4.55-2-4.55-4.48zm7.28 0A2.7 2.7 0 0 0 10 7.71a2.7 2.7 0 0 0-2.73 2.68A2.7 2.7 0 0 0 10 13.08a2.7 2.7 0 0 0 2.73-2.69z"/>`);

feruiShape['fui-error'] = feruiIconSVG(`
  <path class="fui-error-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M12.342 1.728l7.188 13.824c1.19 2.286.024 4.448-2.398 4.448H2.87C.446 20-.72 17.843.47 15.552L7.651 1.728c1.197-2.303 3.492-2.305 4.69 0zM10 17.49a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333zm-1.667-12v5.467c0 .6.747 1.588 1.667 1.588.927 0 1.667-.988 1.667-1.588V5.492c0-.6-.747-1.496-1.667-1.496-.927 0-1.667.896-1.667 1.496z"/>`);

feruiShape['fui-expand'] = feruiIconSVG(`
  <path class="fui-expand-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M2.22 17.78h3.34a1.1 1.1 0 0 1 0 2.22H1.1C.5 20 0 19.5 0 18.88v-4.43a1.11 1.11 0 1 1 2.22 0v3.33zM15.56 5.55v8.9c0 .61-.5 1.1-1.12 1.1H5.56c-.62 0-1.12-.5-1.12-1.1v-8.9c0-.61.5-1.1 1.12-1.1h8.88c.62 0 1.12.5 1.12 1.1zm-2.23 7.78V6.67H6.67v6.66h6.66zM18.9 0a1.1 1.1 0 0 1 .78.33 1.1 1.1 0 0 1 .33.79v4.43a1.11 1.11 0 1 1-2.22 0V2.22h-3.33a1.11 1.11 0 1 1 0-2.22h4.43z"/>`);

feruiShape['fui-help'] = feruiIconSVG(`
  <path class="fui-help-ico clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-1.92-7.37h2.43c0-.4.06-.72.17-.95.1-.23.31-.45.62-.65.55-.29 1-.68 1.36-1.19.36-.5.54-1.05.54-1.65 0-.98-.33-1.75-.99-2.33A3.94 3.94 0 0 0 9.52 5a4.1 4.1 0 0 0-2.57.75C6.3 6.25 6 7 6 8l.01.04h2.37c0-.39.12-.68.34-.88.21-.2.48-.3.8-.3.4 0 .7.13.92.37.22.24.33.56.33.96 0 .39-.1.73-.28 1.03-.19.3-.44.55-.76.75-.62.43-1.05.82-1.29 1.15-.23.34-.35.84-.36 1.5zm2.43 2.02a.97.97 0 0 0-.97-.97h-.48a.98.98 0 0 0-.97.97c0 .54.44.97.97.97h.48c.52 0 .97-.44.97-.97z"/>`);

feruiShape['fui-download'] = feruiIconSVG(`
  <path class="fui-download-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M14.07 13.28l.72-.74a.92.92 0 0 1 1.29 0 .9.9 0 0 1 0 1.28L13.8 16.1a.92.92 0 0 1-1.3 0l-2.28-2.28a.9.9 0 0 1 0-1.28.92.92 0 0 1 1.3 0l.72.72V10.9a.91.91 0 0 1 1.83 0v2.37zm5.02-3.5A6.83 6.83 0 0 1 13.16 20a6.85 6.85 0 0 1-6.07-3.64H1.83c-1.01 0-1.83-.8-1.83-1.81V1.81C0 .81.82 0 1.82 0h5.52c.5 0 1.14.34 1.41.76l1.3 1.97h7.2c1.02 0 1.84.8 1.84 1.82v5.23zm-1.83-2.05V4.55h-7.21c-.62 0-1.2-.31-1.53-.83L7.3 1.82H1.82v12.73h4.62a6.82 6.82 0 0 1 6.71-8.19c1.54 0 2.97.51 4.11 1.37zm-4.1 10.45a5.01 5.01 0 1 0 .01-10.02 5.01 5.01 0 0 0-.02 10.02z"/>`);

feruiShape['fui-upload'] = feruiIconSVG(`
  <path class="fui-upload-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M14.07 12.38v3.16c0 .5-.41.91-.92.91a.91.91 0 0 1-.91-.9v-3.2l-.72.75a.92.92 0 0 1-1.3 0 .9.9 0 0 1 0-1.29l2.29-2.27a.92.92 0 0 1 1.29 0l2.28 2.27a.9.9 0 0 1 0 1.29.92.92 0 0 1-1.3 0l-.71-.72zm5.02-2.6A6.83 6.83 0 0 1 13.16 20a6.85 6.85 0 0 1-6.07-3.64H1.83c-1.01 0-1.83-.8-1.83-1.81V1.81C0 .81.82 0 1.82 0h5.52c.5 0 1.14.34 1.41.76l1.3 1.97h7.2c1.02 0 1.84.8 1.84 1.82v5.23zm-1.83-2.05V4.55h-7.21c-.62 0-1.2-.31-1.53-.83L7.3 1.82H1.82v12.73h4.62a6.82 6.82 0 0 1 6.71-8.19c1.54 0 2.97.51 4.11 1.37zm-4.1 10.45a5.01 5.01 0 1 0 .01-10.02 5.01 5.01 0 0 0-.02 10.02z"/>`);

feruiShape['fui-layers'] = feruiIconSVG(`
  <path class="fui-layers-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M8.61.42c.8-.56 1.98-.56 2.78 0l8.18 5.75a1 1 0 0 1 0 1.64l-8.18 5.76a2.5 2.5 0 0 1-2.78 0L.42 7.81a1 1 0 0 1 0-1.64L8.63.42zm8.66 12.57s-.05-.02-.32-.21a1 1 0 0 1 1.15-1.64l.6.42.87.61a1 1 0 0 1 0 1.64l-8.18 5.77a2.5 2.5 0 0 1-2.78 0L.42 13.81a1 1 0 0 1 0-1.64l.9-.63.62-.43a1 1 0 1 1 1.15 1.64l-.36.25 7.03 4.94c.1.08.37.08.48 0L17.27 13zM10.24 2.06c-.1-.08-.37-.08-.48 0L2.74 6.99l7.02 4.95c.1.07.37.07.48 0l7.02-4.95-7.02-4.93z"/>`);

feruiShape['fui-dots'] = feruiIconSVG(`
  <path class="fui-dots-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M10 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>`);

feruiShape['fui-location'] = feruiIconSVG(`
  <path class="fui-location-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M14.46 16.4C12.84 18.3 10.8 20 10 20c-.8 0-2.84-1.69-4.46-3.6C3.34 13.78 2 10.91 2 8a8 8 0 1 1 16 0c0 2.92-1.34 5.79-3.54 8.4zM7 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0z"/>`);

feruiShape['fui-billing'] = feruiIconSVG(`
  <path class="fui-billing-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M0 16.25V3.75A3.75 3.75 0 0 1 3.75 0h10a3.75 3.75 0 0 1 3.75 3.75v2.5h1.25c.7 0 1.25.56 1.25 1.25v5c0 .7-.56 1.25-1.25 1.25H17.5v2.5A3.75 3.75 0 0 1 13.75 20h-10A3.75 3.75 0 0 1 0 16.25zm18.75-3.75v-5h-7.5v5h7.5zm-5 5c.7 0 1.25-.56 1.25-1.25v-2.5h-1.25V15H12.5v-1.25h-1.25c-.69 0-1.25-.56-1.25-1.25v-5c0-.7.56-1.25 1.25-1.25H15v-2.5c0-.69-.56-1.25-1.25-1.25h-10c-.69 0-1.25.56-1.25 1.25v12.5c0 .7.56 1.25 1.25 1.25h10zm-10-2.5H5v1.25c-.69 0-1.25-.56-1.25-1.25zm3.75 0v1.25H6.25V15H7.5zm2.5 0v1.25H8.75V15H10zm-5-2.5v1.25H3.75V12.5H5zM5 10v1.25H3.75V10H5zm0-2.5v1.25H3.75V7.5H5zM5 5v1.25H3.75V5H5zm1.25-1.25V5H5V3.75h1.25zm2.5 0V5H7.5V3.75h1.25zm2.5 0V5H10V3.75h1.25zM13.75 5H12.5V3.75c.7 0 1.25.56 1.25 1.25zm-2.5 11.25V15h1.25v1.25h-1.25zM15 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"/>`);

feruiShape['fui-catalogs'] = feruiIconSVG(`
  <path class="fui-catlogs-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M18.75 17.5c-1.91.08-5.56.41-7.54 1.44-.1.6-.59 1.06-1.21 1.06s-1.12-.46-1.21-1.06C6.8 17.9 3.16 17.58 1.25 17.5.56 17.5 0 16.94 0 16.25v-15C0 .56.56 0 1.25 0l.12.03C9.97.25 10 2.5 10 2.5S10.03.25 18.63.03l.12-.03c.7 0 1.25.56 1.25 1.25v15c0 .7-.56 1.25-1.25 1.25zm-10-13.58C7.14 3.1 4.47 2.76 2.5 2.6v12.46c3.35.17 5.23.67 6.25 1.18V3.92zM17.5 2.6c-1.97.15-4.64.49-6.25 1.3v12.34c1.02-.5 2.9-1.01 6.25-1.18V2.6z"/>`);

feruiShape['fui-continuity'] = feruiIconSVG(`
  <path class="fui-continuity-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M6.25 12.5h-5c-.69 0-1.25.56-1.25 1.25v5C0 19.45.56 20 1.25 20h5c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25zM5 17.5H2.5V15H5v2.5zM18.75 0h-5c-.7 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h5c.7 0 1.25-.56 1.25-1.25v-5C20 .56 19.44 0 18.75 0zM17.5 5H15V2.5h2.5V5zM8.75 1.25a1.25 1.25 0 0 1 0 2.5h-2.5C5.56 3.75 5 4.31 5 5h1.25a1.25 1.25 0 0 1 .88 2.13l-2.5 2.5a1.25 1.25 0 0 1-1.76 0l-2.5-2.5A1.25 1.25 0 0 1 1.25 5H2.5a3.75 3.75 0 0 1 3.75-3.75h2.5zm8.38 9.12l2.5 2.5a1.25 1.25 0 0 1-.88 2.13H17.5a3.75 3.75 0 0 1-3.75 3.75h-2.5a1.25 1.25 0 1 1 0-2.5h2.5c.7 0 1.25-.56 1.25-1.25h-1.25a1.25 1.25 0 0 1-.88-2.13l2.5-2.5a1.25 1.25 0 0 1 1.76 0z"/>`);

feruiShape['fui-dashboard'] = feruiIconSVG(`
  <path class="fui-dashboard-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M0 16.25V3.75A3.75 3.75 0 0 1 3.75 0h12.5A3.75 3.75 0 0 1 20 3.75v12.5A3.75 3.75 0 0 1 16.25 20H3.75A3.75 3.75 0 0 1 0 16.25zm16.25 1.25c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25H3.75c-.7 0-1.25.56-1.25 1.25v12.5c0 .7.56 1.25 1.25 1.25h12.5zm-7.5-6.25V15H5v-3.75h3.75zm6.25 0V15h-3.75v-3.75H15zM15 5v3.75H5V5h10z"/>`);

feruiShape['fui-networking'] = feruiIconSVG(`
  <path class="fui-networking-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M12.57 12.5H7.43c-.37 0-.7.15-.92.39 1.3.6 2.2 1.87 2.2 3.36A3.8 3.8 0 0 1 4.86 20 3.8 3.8 0 0 1 1 16.25c0-1.63 1.08-3 2.57-3.52V7.27A3.75 3.75 0 0 1 1 3.75 3.8 3.8 0 0 1 4.86 0 3.8 3.8 0 0 1 8.7 3.75c0 1.63-1.07 3-2.57 3.52v2.96c.4-.14.83-.23 1.29-.23h5.14c.71 0 1.29-.56 1.29-1.25v-.23A3.75 3.75 0 0 1 11.29 5a3.8 3.8 0 0 1 3.85-3.75A3.8 3.8 0 0 1 19 5c0 1.63-1.08 3-2.57 3.52v.23a3.8 3.8 0 0 1-3.86 3.75zm2.57-8.75c-.7 0-1.28.56-1.28 1.25 0 .7.57 1.25 1.28 1.25.71 0 1.29-.56 1.29-1.25 0-.7-.58-1.25-1.29-1.25zM4.86 2.5c-.71 0-1.29.56-1.29 1.25 0 .7.58 1.25 1.29 1.25.7 0 1.28-.56 1.28-1.25 0-.7-.57-1.25-1.28-1.25zm0 12.5c-.71 0-1.29.56-1.29 1.25 0 .7.58 1.25 1.29 1.25.7 0 1.28-.56 1.28-1.25 0-.7-.57-1.25-1.28-1.25z"/>`);

feruiShape['fui-security'] = feruiIconSVG(`
  <path class="fui-security-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M17.71 20H2.3C1.57 20 1 19.44 1 18.75V2.5c0-.69.57-1.25 1.29-1.25h2.57v2.5H3.57V17.5h12.86V3.75h-1.29v-2.5h2.57c.72 0 1.29.56 1.29 1.25v16.25c0 .7-.57 1.25-1.29 1.25zM4.86 5h1.28c0 .69.58 1.25 1.29 1.25h5.14c.71 0 1.29-.56 1.29-1.25h1.28v11.25H4.86V5zm7.71 0H7.43c-.71 0-1.29-.56-1.29-1.25v-2.5h2.57V0h2.58v1.25h2.57v2.5c0 .69-.58 1.25-1.29 1.25zM11.3 2.5H8.7v1.25h2.58V2.5z"/>`);

feruiShape['fui-message'] = feruiIconSVG(`
<path class="fui-message-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M15.3 16.08l-4.6-4.55-1.06 1.05a.83.83 0 0 1-1.17 0l-1.06-1.05-4.6 4.55H15.3zm1.16-1.15v-9.1l-4.6 4.55 4.6 4.55zm-14.81 0l4.6-4.55-4.6-4.56v9.11zM2.8 4.67l6.24 6.21 6.25-6.21H2.8zM1.65 3.04h14.81c.91 0 1.65.73 1.65 1.63v11.42c0 .9-.74 1.62-1.65 1.62H1.65C.74 17.71 0 16.98 0 16.1V4.67c0-.9.74-1.63 1.65-1.63z"/>

  <path class="fui-message-icon clr-i-outline--badged clr-i-outline-path-1" fill-rule="evenodd" d="M16.462 9.965a5.222 5.222 0 0 0 1.646-.058v6.296c0 .898-.737 1.626-1.646 1.626H1.647C.737 17.83 0 17.102 0 16.203V4.784c0-.898.738-1.626 1.647-1.626h10.844a4.753 4.753 0 0 0-.408 1.629l-9.277.001 6.248 6.21 3.607-3.585c.265.482.61.915 1.018 1.284l-1.814 1.797 4.597 4.552v-5.08zM15.298 16.2L10.7 11.646 9.636 12.7a.829.829 0 0 1-1.164 0l-1.064-1.054-4.6 4.556c2.766-.002 9.722-.003 12.49-.003zM1.646 15.046l4.598-4.552L1.646 5.94v9.105z"/>
  <path class="fui-message-icon clr-i-outline--badged clr-i-outline-path-2" fill-rule="evenodd" d="M16.814 8.372a3.186 3.186 0 1 0 0-6.372 3.186 3.186 0 0 0 0 6.372z"/>
  `);

feruiShape['fui-less'] = feruiIconSVG(`
  <path class="fui-less-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M2.5 8h15c1.3807 0 2.5 1.1193 2.5 2.5S18.8807 13 17.5 13h-15C1.1193 13 0 11.8807 0 10.5S1.1193 8 2.5 8z"/>`);

feruiShape['fui-plus'] = feruiIconSVG(`
  <path class="fui-plus-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm1.08-11.01V6a1 1 0 0 0-1-1.01h-.32a1 1 0 0 0-1 1V9H6a1 1 0 0 0-1.01 1v.18a1 1 0 0 0 1 1h2.76v3.25a1 1 0 0 0 1 1.01h.32a1 1 0 0 0 1-1.01v-3.25h2.74a1 1 0 0 0 1-1v-.18a1 1 0 0 0-1-1h-2.74z"/>`);

feruiShape['fui-reverse'] = feruiIconSVG(`
  <path class="fui-reverse-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M5.86 5.42h5.25a5.62 5.62 0 0 1 5.63 5.6v4.61a1 1 0 0 0 1 1H18a1 1 0 0 0 1-1v-4.6a7.87 7.87 0 0 0-7.9-7.85H5.85l1.27-1.26c.44-.44.45-1.15 0-1.6a1.14 1.14 0 0 0-1.6.01L2.34 3.5a1.11 1.11 0 0 0 0 1.58l3.19 3.17c.44.44 1.15.45 1.6 0 .44-.43.43-1.14 0-1.58L5.85 5.42zm6.37 6.48a2 2 0 0 0-2-2H4.08a2 2 0 0 0-2 2V18c0 1.1.9 2 2 2h6.15a2 2 0 0 0 2-2v-6.1zm-2.25.25v5.6H4.33v-5.6h5.65z"/>`);

feruiShape['fui-rotate'] = feruiIconSVG(`
  <path class="fui-rotate-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M18.54 7.78a1.1 1.1 0 0 1-.35 0h-3.74a1.11 1.11 0 0 1 0-2.22h1.87C14.62 3.3 12.59 2.22 10 2.22a7.78 7.78 0 1 0 7.72 8.75 1.11 1.11 0 0 1 2.2.28A10 10 0 1 1 10 0a9.56 9.56 0 0 1 7.78 3.82v-1.6c0-.6.5-1.1 1.1-1.1.63 0 1.12.5 1.12 1.1v4.45c0 .3-.12.58-.33.78-.2.2-.48.33-.79.33h-.34z"/>`);

feruiShape['fui-screenshot'] = feruiIconSVG(`
  <path class="fui-screenshot-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M1.82 1h16.36c1 0 1.82.9 1.82 2v14c0 1.1-.82 2-1.82 2H1.82C.82 19 0 18.1 0 17V3c0-1.1.82-2 1.82-2zm0 16h16.36V3H1.82v14zm4.15-8.68c.46-1 1.27-1.03 1.83-.08l.5.9a1.82 1.82 0 0 0 2.66.6l-.85.58a1.94 1.94 0 0 1 2.74.55l.93 1.45c.6.93.2 1.68-.9 1.68H5.4c-1.1 0-1.63-.82-1.18-1.81l1.75-3.87zM15 9c-.75 0-1.36-.67-1.36-1.5S14.24 6 15 6c.75 0 1.36.67 1.36 1.5S15.76 9 15 9z"/>`);

feruiShape['fui-search-arrow'] = feruiIconSVG(`
  <path class="fui-search-arrow-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M19.2 7.67c.21 0 .41.1.57.27.15.17.23.4.23.64 0 .25-.08.48-.24.65l-.32.37-1.94 2.31a.94.94 0 0 1-.71.34.94.94 0 0 1-.7-.34L13.8 9.23a.98.98 0 0 1-.24-.65c0-.24.09-.47.24-.64a.75.75 0 0 1 .57-.27h4.82zm-8.49 5.57a1.03 1.03 0 1 1-1.46 1.46l-2.43-2.42a4.48 4.48 0 1 1 1.46-1.46l2.43 2.42zm-6.23-1.66a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2z"/>`);

feruiShape['fui-search'] = feruiIconSVG(`
  <path class="fui-search-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M15.05 12.4a8.06 8.06 0 0 0 1.23-4.26 8.14 8.14 0 1 0-8.14 8.14c1.56 0 3.01-.47 4.25-1.23l4.4 4.4a1.88 1.88 0 1 0 2.66-2.66l-4.4-4.4zM2.5 8.13a5.63 5.63 0 1 1 11.27 0 5.63 5.63 0 0 1-11.27 0z"/>`);

feruiShape['fui-select-mode'] = feruiIconSVG(`
  <path class="fui-select-mode-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M17.3 1.63c.6-.6 1.58-.6 2.19 0 .6.6.6 1.58 0 2.19l-6.55 6.57c-.6.61-1.58.61-2.18 0L7.5 7.11c-.6-.6-.6-1.59 0-2.2.6-.6 1.58-.6 2.18 0l2.18 2.2 5.46-5.48zm.48 7.26a1.11 1.11 0 1 1 2.22 0v6.67A4.44 4.44 0 0 1 15.55 20H4.45A4.45 4.45 0 0 1 0 15.55V4.45C0 1.99 2 0 4.45 0h6.1a1.11 1.11 0 0 1 0 2.22h-6.1c-1.23 0-2.23 1-2.23 2.23v11.1c0 1.23 1 2.23 2.23 2.23h11.1c1.23 0 2.23-1 2.23-2.22V8.89z"/>`);

feruiShape['fui-send'] = feruiIconSVG(`
  <path class="fui-send-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M16.71 4.7l-6.03 6.04 2.22 5.4L16.71 4.7zM9.26 9.32L15.3 3.3 3.87 7.1l5.4 2.22zm2.81 10.06l-3.34-8.11L.62 7.93a1 1 0 0 1 .06-1.88l18-6a1 1 0 0 1 1.27 1.27l-6 18a1 1 0 0 1-1.88.06z"/>`);

feruiShape['fui-settings'] = feruiIconSVG(`
  <path class="fui-settings-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M18.75 8.75H17.5l-.12.02a7.44 7.44 0 0 0-1.3-3.12c.04-.03.08-.04.1-.07l.9-.88a1.25 1.25 0 1 0-1.78-1.77l-.88.88-.07.1a7.42 7.42 0 0 0-3.13-1.29l.03-.12V1.25a1.25 1.25 0 1 0-2.5 0V2.5l.03.12a7.42 7.42 0 0 0-3.13 1.3c-.03-.04-.04-.08-.07-.1l-.88-.9A1.25 1.25 0 1 0 2.93 4.7l.88.88.1.07a7.42 7.42 0 0 0-1.29 3.12l-.12-.02H1.25a1.25 1.25 0 1 0 0 2.5H2.5l.12-.02a7.44 7.44 0 0 0 1.3 3.12c-.04.03-.08.04-.1.07l-.9.88a1.25 1.25 0 0 0 1.78 1.77l.88-.88.07-.1c.9.65 1.97 1.1 3.13 1.29l-.03.12v1.25a1.25 1.25 0 1 0 2.5 0V17.5l-.03-.12a7.44 7.44 0 0 0 3.13-1.3c.03.04.04.08.07.1l.88.89a1.25 1.25 0 1 0 1.77-1.77l-.88-.88-.1-.07a7.44 7.44 0 0 0 1.29-3.12l.12.02h1.25a1.25 1.25 0 1 0 0-2.5zM10 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>`);

feruiShape['fui-spinner'] = feruiIconSVG(`
  <path class="fui-spinner-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M10 0a1.82 1.82 0 0 1 0 3.64A6.36 6.36 0 1 0 16.36 10 1.82 1.82 0 0 1 20 10 10 10 0 1 1 10 0z"/>`);

feruiShape['fui-status'] = feruiIconSVG(`
  <path class="fui-status-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M15.2 10.2055a4.876 4.876 0 0 1 .2148-.0055C16 10.2 16 10.9641 16 11c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8c1.8922 0 3.7366 3.4809 3.9742 7.2H15.2v.0055zM14.3505 11.8h-2.3769c-.1236 1.8894-.6707 3.7267-1.425 5.0725 2.0328-.8835 3.5175-2.7916 3.8019-5.0725zm-12.701 0c.2844 2.2809 1.769 4.189 3.802 5.0725C4.6971 15.5267 4.15 13.6894 4.0264 11.8H1.6495zm0-1.6h2.3763c.1208-1.8915.6573-3.7215 1.4043-5.0631-2.022.8875-3.4972 2.7902-3.7806 5.0631zm3.9792 1.6c.1027 1.4385.476 2.8173 1.032 3.9349C7.1799 16.7787 7.7886 17.4 8 17.4c.2114 0 .8201-.6213 1.3394-1.6651.5559-1.1176.9292-2.4964 1.032-3.9349H5.6287zm-.0006-1.6h4.7438c-.101-1.4438-.4694-2.8243-1.0186-3.937C8.8359 5.2148 8.2305 4.6 8 4.6c-.2305 0-.836.6148-1.3533 1.663-.5492 1.1127-.9176 2.4932-1.0186 3.937z"/>
  <circle class="fui-status-circle-icon clr-i-outline clr-i-outline-path-2" cx="506.5" cy="240.5" r="3.5" fill-rule="evenodd"/>`);

feruiShape['fui-support'] = feruiIconSVG(`
  <path class="fui-support-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M10 20a10 10 0 1 1 9.07-5.79l.88 4.2c.22 1.08-.47 1.78-1.55 1.55l-4.2-.9c-1.27.6-2.7.93-4.2.93zm-1.42-7.74h2.37c0-.4.05-.7.15-.92.1-.23.31-.44.6-.64a3.7 3.7 0 0 0 1.33-1.15c.35-.49.52-1.02.52-1.6 0-.96-.31-1.71-.95-2.27a3.83 3.83 0 0 0-2.62-.84c-1.03 0-1.87.24-2.5.73-.63.49-.94 1.22-.93 2.18l.02.05h2.3c0-.38.12-.67.33-.86.2-.19.47-.28.78-.28.39 0 .69.11.9.35.2.23.31.54.31.93 0 .38-.09.71-.27 1-.18.3-.42.53-.74.73-.6.42-1.02.8-1.25 1.12-.23.33-.34.82-.35 1.47zm2.36 2.9v-1.88H8.59v1.88h2.35z"/>`);

feruiShape['fui-tick'] = feruiIconSVG(`
  <path class="fui-tick-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M15.92 3.7l-8.45 8.5-3.39-3.4a2.38 2.38 0 0 0-3.38 0 2.4 2.4 0 0 0 0 3.4l5.08 5.1c.93.93 2.44.93 3.38 0L19.3 7.1a2.4 2.4 0 0 0 0-3.4 2.38 2.38 0 0 0-3.38 0z"/>`);

feruiShape['fui-trash'] = feruiIconSVG(`
  <path class="fui-trash-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M5.19 4.21V17.9H15.8V4.2H5.2zm12.75 0V17.9c0 1.16-.96 2.1-2.13 2.1H5.2a2.11 2.11 0 0 1-2.13-2.1V4.2a1.05 1.05 0 0 1 0-2.1h5.31C8.38.94 9.34 0 10.5 0s2.13.94 2.13 2.1h5.32c.58 0 1.05.47 1.05 1.06 0 .58-.47 1.05-1.05 1.05h-.01zm-6.38 3.17a1.06 1.06 0 1 1 2.13 0v7.34a1.06 1.06 0 1 1-2.13 0V7.38zm-4.25 0a1.06 1.06 0 1 1 2.13 0v7.34a1.06 1.06 0 1 1-2.13 0V7.38z"/>`);

feruiShape['fui-list'] = feruiIconSVG(`
  <path class="fui-list-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M6.67 10c0-.61.5-1.11 1.11-1.11h11.1a1.11 1.11 0 1 1 0 2.22H7.79c-.61 0-1.11-.5-1.11-1.11zm0-7.78c0-.61.5-1.1 1.11-1.1h11.1a1.11 1.11 0 1 1 0 2.21H7.79c-.61 0-1.11-.49-1.11-1.1zm0 15.56c0-.62.5-1.11 1.11-1.11h11.1a1.11 1.11 0 1 1 0 2.22H7.79c-.61 0-1.11-.5-1.11-1.11zm-4.45-5.56a2.22 2.22 0 1 1 0-4.44 2.22 2.22 0 0 1 0 4.44zm0-7.78a2.22 2.22 0 1 1 0-4.44 2.22 2.22 0 0 1 0 4.44zm0 15.56a2.22 2.22 0 1 1 0-4.44 2.22 2.22 0 0 1 0 4.44z"/>`);

feruiShape['fui-eye'] = feruiIconSVG(`
  <path class="fui-eye-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M10 18a10.8 10.8 0 0 1-7.2-2.81C1.13 13.7 0 11.83 0 10.5c0-1.33 1.13-3.2 2.8-4.69A10.8 10.8 0 0 1 10 3a10.8 10.8 0 0 1 7.2 2.81C18.87 7.3 20 9.17 20 10.5c0 1.33-1.13 3.2-2.8 4.69A10.8 10.8 0 0 1 10 18zm0-1.88c2.26 0 4.35-.88 6.01-2.35 1.31-1.16 2.17-2.6 2.17-3.27 0-.68-.86-2.1-2.17-3.27A9.03 9.03 0 0 0 10 4.87c-2.27 0-4.36.9-6.01 2.36-1.31 1.17-2.17 2.6-2.17 3.27 0 .67.86 2.1 2.17 3.27A9.03 9.03 0 0 0 10 16.13zm0-2.67a2.9 2.9 0 0 1-2.86-2.95A2.9 2.9 0 0 1 10 7.55a2.9 2.9 0 0 1 2.86 2.95A2.9 2.9 0 0 1 10 13.45z"/>`);

feruiShape['fui-eye-off'] = feruiIconSVG(`
  <path class="fui-eye-off-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M4.72 16.58l-1.15 1.15a.9.9 0 0 1-1.28 0 .91.91 0 0 1 0-1.29l.9-.9-.39-.34C1.13 13.72 0 11.85 0 10.53c0-1.32 1.13-3.18 2.8-4.66a10.83 10.83 0 0 1 7.2-2.8c1.63 0 3.18.37 4.58 1.05l1.85-1.85a.9.9 0 0 1 1.28 0c.36.35.36.93 0 1.29l-1.5 1.51c.34.25.67.51 1 .8C18.86 7.33 20 9.2 20 10.52c0 1.33-1.13 3.2-2.8 4.67a10.57 10.57 0 0 1-12.48 1.38zM6.1 15.2c1.2.6 2.52.92 3.91.92 2.26 0 4.35-.88 6.01-2.34 1.31-1.16 2.17-2.58 2.17-3.26 0-.67-.86-2.1-2.17-3.25a9.86 9.86 0 0 0-1.14-.87l-2.5 2.5c.31.46.49 1.02.49 1.62A2.9 2.9 0 0 1 10 13.47a2.8 2.8 0 0 1-1.64-.54l-2.27 2.28zm-1.58-1l2.77-2.77a3 3 0 0 1-.14-.9A2.9 2.9 0 0 1 10 7.6c.33 0 .65.06.94.16l2.23-2.23c-1-.39-2.06-.6-3.17-.6-2.27 0-4.36.88-6.01 2.35-1.31 1.16-2.17 2.58-2.17 3.25 0 .67.86 2.1 2.17 3.25.17.15.34.3.52.43z"/>`);

feruiShape['fui-tree'] = feruiIconSVG(`
  <path class="fui-tree-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M1 16.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1 1 1 0 0 1 1 1v3.5h3V5c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-.5H2v7h3V14c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-.5H1zm6 0v.5h11v-3H7v2.5zm0-9V8h11V5H7v2.5z"/>`);

feruiShape['fui-protected'] = feruiIconSVG(`
  <path class="fui-protected-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M8.45 13.27a1.82 1.82 0 1 1 2.73 1.58v.7a.9.9 0 0 1-1.82 0v-.7c-.54-.32-.9-.9-.9-1.58zM4.82 6.45a5.45 5.45 0 1 1 10.9 0v2.28c1.01 0 1.82.8 1.82 1.82v6.8c0 1.01-.8 1.83-1.82 1.83H4.82c-1 0-1.82-.81-1.82-1.82v-6.81c0-1 .81-1.82 1.82-1.82V6.45zm1.82 2.28h7.27V6.45a3.64 3.64 0 0 0-7.27 0v2.28zm-1.82 1.81v6.82h10.9v-6.82H4.83z"/>`);

feruiShape['fui-unprotected'] = feruiIconSVG(`
  <path class="fui-unprotected-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M10.9 13.27a1.82 1.82 0 1 1 2.74 1.58v.7c0 .5-.4.9-.91.9a.9.9 0 0 1-.91-.9v-.7c-.55-.32-.91-.9-.91-1.58zM9.1 8.73V6.45a3.64 3.64 0 0 0-7.28 0v1.37a.9.9 0 1 1-1.82 0V6.45a5.45 5.45 0 1 1 10.9 0v2.28h7.28c1 0 1.82.8 1.82 1.82v6.81c0 1-.81 1.82-1.82 1.82H7.28c-1.01 0-1.83-.81-1.83-1.82v-6.81c0-1 .82-1.82 1.82-1.82H9.1zm-1.83 1.82v6.81h10.91v-6.81H7.28z"/>`);

feruiShape['fui-zoomout'] = feruiIconSVG(`
  <path class="fui-zoomout-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M9.02 7.82L10.7 9.5a.85.85 0 0 1-1.2 1.2L7.82 9.02 6.14 10.7a.85.85 0 1 1-1.2-1.2l1.68-1.68-1.68-1.68a.85.85 0 0 1 1.2-1.2l1.68 1.68L9.5 4.94a.85.85 0 1 1 1.2 1.2L9.02 7.82zm5.02 4.74l5.66 5.66a1.04 1.04 0 1 1-1.47 1.47l-5.67-5.65a7.82 7.82 0 1 1 1.47-1.47zm-6.22 1a5.73 5.73 0 1 0 0-11.47 5.73 5.73 0 0 0 0 11.46z"/>`);

feruiShape['fui-unknown'] = feruiIconSVG(`
  <path class="fui-unknown-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-12a2 2 0 0 0-2 2 1 1 0 1 1-2 0 4 4 0 0 1 4-4c2.23 0 4 1.6 4 3.8 0 1.2-.41 1.93-1.31 2.7l-1.17.96c-.42.33-.5.48-.5.98a1 1 0 1 1-2 0c0-1.17.4-1.86 1.25-2.54l1.11-.91c.5-.43.63-.65.63-1.2C12 6.77 11.17 6 10 6zm0 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>`);

feruiShape['fui-clear-field'] = feruiIconSVG(`
  <path class="fui-clear-field-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M10 20C4.4772 20 0 15.5228 0 10S4.4772 0 10 0s10 4.4772 10 10-4.4772 10-10 10zm0-11.412L7.5907 6.1787a.9963.9963 0 0 0-1.4135-.0015c-.3926.3926-.3892 1.0228.0015 1.4135L8.588 10l-2.4093 2.4093a.9963.9963 0 0 0-.0015 1.4135c.3926.3926 1.0228.3892 1.4135-.0015L10 11.412l2.4093 2.4093a.9963.9963 0 0 0 1.4135.0015c.3926-.3926.3892-1.0228-.0015-1.4135L11.412 10l2.4093-2.4093a.9963.9963 0 0 0 .0015-1.4135c-.3926-.3926-1.0228-.3892-1.4135.0015L10 8.588z"/>`);

feruiShape['fui-fullscreen'] = feruiIconSVG(`
  <path class="fui-fullscreen-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M16.6969 14.4444c0-.6136.6954-1.5441 1.6464-1.5441.951 0 1.6567.9305 1.6567 1.5441v3.3361C20 19.0075 19.007 20 17.778 20H2.222C.9944 20 0 19.0076 0 17.778V2.222C0 .9955.9929 0 2.2195 0h3.336c.6137 0 1.4543.845 1.4543 1.6344 0 .7894-.8406 1.6568-1.4542 1.6568h-2.224v13.4456h13.3653v-2.2924zm-.0302-8.754l-7.1549 7.1548c-.6508.6509-1.7061.6509-2.357 0-.6509-.6509-.6509-1.7062 0-2.357l7.1548-7.1549h-2.643C10.7463 3.3333 10 2.5871 10 1.6667 10 .7462 10.7462 0 11.6667 0h6.6666C19.2538 0 20 .7462 20 1.6667v6.6666C20 9.2538 19.2538 10 18.3333 10c-.9204 0-1.6666-.7462-1.6666-1.6667v-2.643z"/>`);

feruiShape['fui-phone'] = feruiIconSVG(`
  <path class="fui-phone-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M9.0436 5.5155L8.0259 6.5323c-.5623.5618-.5613 1.4755.0034 2.0397l3.391 3.3881c.5684.5679 1.4788.5657 2.0416.0034l1.0177-1.0168c.3763-.3759.9848-.3774 1.3616-.001l3.7356 3.7324c.5634.5629.566 1.473-.0024 2.0408l-2.0371 2.0353c-1.3125 1.3113-3.695 1.6562-5.2884.7036 0 0-2.5521-1.0729-6.577-5.0943C1.6469 10.3422.5336 7.745.5336 7.745c-.9283-1.6072-.6133-3.9766.6956-5.2844L3.2663.4252C3.831-.139 4.742-.1436 5.309.4228l3.7356 3.7323a.9602.9602 0 0 1-.001 1.3604zM2.5882 3.8183c-.6952.6946-.8129 2.0847-.39 2.9668 0 0 .6789 1.2308.9861 1.6838.9082 1.3388 2.1712 2.863 3.8466 4.5368 1.675 1.6736 3.1911 2.9277 4.5153 3.8222.4471.302 1.6896.9821 1.6896.9821.8045.4207 2.2348.2935 2.9425-.4136l1.7006-1.699-2.718-2.7157-.34.3396c-1.3149 1.3138-3.4421 1.3129-4.7595-.0034L6.6703 9.93c-1.3142-1.313-1.3174-3.4426-.0034-4.7554l.34-.3397-2.718-2.7156-1.7007 1.6991z"/>`);

feruiShape['fui-replicated'] = feruiIconSVG(`
  <path class="fui-replicated-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M15.7715.0951c-.4663.1925-.7713.65-.7713 1.155v1.2502h-2.5c-2.0714 0-3.7503 1.68-3.7503 3.7501v1.25A1.249 1.249 0 0 1 7.5 8.7506H1.2496c-.69 0-1.25.5588-1.25 1.25 0 .6901.56 1.2502 1.25 1.2502h6.2503c.6913 0 1.25.56 1.25 1.25v1.25c0 2.0714 1.6789 3.7502 3.7502 3.7502h2.5001v1.25c0 .5051.305.9626.7713 1.1551a1.2545 1.2545 0 0 0 1.3626-.2712l2.5-2.5001a1.2466 1.2466 0 0 0 .3664-.8838c0-.32-.1225-.64-.3663-.8838L17.134 12.867a1.2522 1.2522 0 0 0-1.3626-.2713c-.4663.1925-.7713.65-.7713 1.155v1.2501h-2.5c-.6901 0-1.2501-.56-1.2501-1.25v-1.25c0-.9651-.375-1.8352-.9726-2.5002.5975-.6638.9726-1.5363.9726-2.5001v-1.25c0-.6914.56-1.2501 1.25-1.2501h2.5001v1.25c0 .505.305.9626.7713 1.155a1.2545 1.2545 0 0 0 1.3626-.2712l2.5-2.5001a1.2466 1.2466 0 0 0 .3664-.8838c0-.32-.1225-.64-.3663-.8838L17.134.3664a1.2522 1.2522 0 0 0-1.3626-.2713z"/>`);

feruiShape['fui-non-replicated'] = feruiIconSVG(`
  <path class="fui-non-replicated-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M16.6171 2.0757c.374-.154.804-.069 1.09.217l2.0002 2.0001c.195.195.293.451.293.707 0 .256-.098.512-.293.7071l-2.0001 2c-.286.285-.716.371-1.09.217-.373-.154-.617-.52-.617-.924V6H14c-.552 0-1 .447-1 1v1c0 .7711-.3 1.4692-.778 2.0002.478.532.778 1.228.778 2v1.0001c0 .552.448 1 1 1h2.0001v-1c0-.404.244-.77.617-.924.374-.154.804-.069 1.09.217l2.0002 2c.195.195.293.451.293.707 0 .256-.098.5121-.293.7071l-2.0001 2c-.286.2851-.716.3711-1.09.2171-.373-.154-.617-.52-.617-.924v-1H14c-1.657 0-3.0001-1.3431-3.0001-3.0002v-1c0-.552-.447-1-1-1H8.9996c-.552 0-1-.4481-1-1.0001 0-.553.448-1 1-1H10c.553 0 1-.447 1-1.0001V7c0-1.6561 1.343-3.0002 3.0001-3.0002h2.0001v-1c0-.404.244-.77.617-.924zM5.7674 10.1698l2.242 2.2421c.4411.441.4412 1.1562.0001 1.5973-.441.441-1.1562.4411-1.5972 0L4.17 11.7671l-2.242 2.2421c-.4412.4411-1.1563.441-1.5973 0-.441-.441-.441-1.1562 0-1.5973l2.242-2.242-2.242-2.2422c-.441-.441-.441-1.1562 0-1.5973.441-.441 1.1561-.441 1.5972 0l2.2421 2.2422 2.2422-2.2422c.441-.441 1.1561-.441 1.5972 0 .441.4411.441 1.1563 0 1.5973l-2.2421 2.2421z"/>`);

feruiShape['fui-filter'] = feruiIconSVG(`
  <path class="fui-filter-icon clr-i-outline clr-i-outline-path-1" fill-rule="evenodd" d="M13.639 7c1.27 0 2.35.835 2.75 2h1.139c.537 0 .972.444.972 1 0 .552-.433 1-.972 1H16.39c-.4 1.165-1.481 2-2.751 2-1.27 0-2.35-.835-2.75-2H1.971A.984.984 0 0 1 1 10c0-.552.433-1 .972-1h8.916c.4-1.165 1.481-2 2.75-2zM7.806 0c1.27 0 2.35.835 2.75 2h6.972c.537 0 .972.444.972 1 0 .552-.433 1-.972 1h-6.972c-.4 1.165-1.48 2-2.75 2s-2.35-.835-2.751-2H1.972A.984.984 0 0 1 1 3c0-.552.433-1 .972-1h3.083c.4-1.165 1.48-2 2.75-2zM5.86 14c1.27 0 2.35.835 2.75 2h8.917c.537 0 .972.444.972 1 0 .552-.433 1-.972 1H8.612c-.4 1.165-1.481 2-2.75 2-1.27 0-2.351-.835-2.752-2H1.972A.984.984 0 0 1 1 17c0-.552.433-1 .972-1H3.11c.4-1.165 1.481-2 2.751-2zm.972 3c0-.552-.435-1-.972-1-.537 0-.972.448-.972 1s.435 1 .972 1c.537 0 .972-.448.972-1zm7.778-7c0-.552-.435-1-.972-1-.537 0-.972.448-.972 1s.435 1 .972 1c.537 0 .972-.448.972-1zM8.778 3c0-.552-.436-1-.972-1-.537 0-.973.448-.973 1s.436 1 .973 1c.536 0 .972-.448.972-1z"/>
  
  <path class="fui-filter-icon clr-i-outline--badged clr-i-outline-path-1" fill-rule="evenodd" d="M13.6389 7c1.27 0 2.3503.8348 2.7507 2h1.1383c.5369 0 .9721.4439.9721 1 0 .5523-.4326 1-.972 1h-1.1384c-.4004 1.1652-1.4808 2-2.7507 2-1.27 0-2.3503-.8348-2.7507-2H1.972C1.4352 11 1 10.5561 1 10c0-.5523.4326-1 .972-1h8.9162c.4004-1.1652 1.4808-2 2.7507-2zM7.8056 0c1.2699 0 2.3503.8348 2.7507 2h2.559c-.0828.4664-.1175.4439-.1175 1 0 .5523.0154.4074.1175 1h-2.559c-.4004 1.1652-1.4808 2-2.7507 2-1.27 0-2.3504-.8348-2.7507-2H1.972C1.4352 4 1 3.5561 1 3c0-.5523.4326-1 .972-1H5.055C5.4552.8348 6.5356 0 7.8056 0zM5.861 14c1.27 0 2.3503.8348 2.7507 2h8.9161c.5369 0 .9721.4439.9721 1 0 .5523-.4326 1-.972 1H8.6117c-.4004 1.1652-1.4808 2-2.7507 2-1.27 0-2.3503-.8348-2.7507-2H1.9721C1.4352 18 1 17.5561 1 17c0-.5523.4326-1 .972-1h1.1384c.4004-1.1652 1.4808-2 2.7507-2zm.9722 3c0-.5523-.4352-1-.9722-1-.537 0-.9722.4477-.9722 1s.4353 1 .9722 1c.537 0 .9722-.4477.9722-1zm7.7778-7c0-.5523-.4353-1-.9722-1-.537 0-.9722.4477-.9722 1s.4352 1 .9722 1c.537 0 .9722-.4477.9722-1zM8.7778 3c0-.5523-.4353-1-.9722-1-.537 0-.9723.4477-.9723 1s.4353 1 .9723 1c.5369 0 .9722-.4477.9722-1z"/>
  <circle class="fui-filter-icon-circle clr-i-outline--badged clr-i-outline-path-2" fill-rule="evenodd" cx="17" cy="3" r="3"/>`);

if (typeof window !== 'undefined' && window.hasOwnProperty('ClarityIcons')) {
  window.ClarityIcons.add(feruiShape);
}

export { feruiShape as FeruiShape };
