import type { LostConfig, AddonType } from "jsr:@lost-c3/lib";

declare global {
    const Config: LostConfig<AddonType>;
}

export {}