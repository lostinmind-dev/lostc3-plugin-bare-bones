import type { LostConfig, AddonType } from "jsr:@lost-c3/lib@1.2.4";

declare global {
    const Config: LostConfig<AddonType>;
}

export {}