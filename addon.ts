import { defineAddon, Plugin, Property } from "./deps.ts";
import type { EditorInstance } from "@Editor/Instance.ts";
import type { EditorType } from "@Editor/Type.ts";
import config from "./lost.config.ts";


export default defineAddon(
    new Plugin<EditorInstance, EditorType>(config)
)