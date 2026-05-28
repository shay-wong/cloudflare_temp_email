import { describe, it, expect } from 'vitest';
import { generateRandomAddressName } from '../random-name';

describe('generateRandomAddressName', () => {
    it('generates a visible lowercase address name for the admin random-name button', () => {
        const name = generateRandomAddressName();

        expect(name).toMatch(/^[a-z0-9]{12}$/);
    });

    it('respects a shorter maximum address length', () => {
        const name = generateRandomAddressName(6);

        expect(name).toMatch(/^[a-z0-9]{6}$/);
    });
});
