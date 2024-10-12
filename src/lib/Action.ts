import type { ActionState } from "./ActionState";

export type Action = {
	name: string;
	uuid: string;
	plugin: string;
	tooltip: string;
	icon: string;
	visible_in_action_list: boolean;
	supported_in_multi_actions: boolean;
	user_title_enabled: boolean;
	property_inspector: string;
	controllers: string[];
	states: ActionState[];
};
