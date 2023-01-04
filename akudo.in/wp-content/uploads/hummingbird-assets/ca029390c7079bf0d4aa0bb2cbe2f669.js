/**handles:ecs-script**/
var ECS_hooks = {},
  ECS_Columns_Count = 0;
function ECS_add_action(o, _) {
  ECS_hooks[o] || (ECS_hooks[o] = []), ECS_hooks[o].push(_);
}
function ECS_do_action(o, ..._) {
  ECS_hooks[o] && ECS_hooks[o].forEach((o) => o(..._));
}
