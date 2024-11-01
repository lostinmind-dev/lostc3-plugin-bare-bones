import type { LostConfig } from "jsr:@lost-c3/lib";

declare global {
    const Config: LostConfig<'plugin' | 'behavior'>;
}

export {}