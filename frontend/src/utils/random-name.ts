// 默认生成 12 位本地随机邮箱名，足够可读且低碰撞。
const DEFAULT_RANDOM_ADDRESS_NAME_LENGTH = 12;

export const generateRandomAddressName = (maxAddressLen?: number): string => {
    const targetLength = Math.max(
        Math.min(maxAddressLen || DEFAULT_RANDOM_ADDRESS_NAME_LENGTH, DEFAULT_RANDOM_ADDRESS_NAME_LENGTH),
        1,
    );
    let name = '';
    while (name.length < targetLength) {
        name += Math.random().toString(36).slice(2);
    }
    return name.slice(0, targetLength);
}
