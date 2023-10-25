import prerenderNode from 'prerender-node';

export default defineNuxtRouteMiddleware((to, from) => {
  const app = useRuntime().app;

  app.use(prerenderNode.set('prerenderToken', 'pjjc0Wf9MdJymh9VMNPB'));
});
