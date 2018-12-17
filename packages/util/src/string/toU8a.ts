// Copyright 2017-2018 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import './polyfill/textEncoder';

let encoder: TextEncoder | undefined;

try {
  encoder = new TextEncoder();
} catch (error) {
  // noop
}

/**
 * @name stringToU8a
 * @signature stringToU8a (value?: string): UInt8Array
 * @summary Creates a Uint8Array object from a utf-8 string.
 * @description
 * String input values return the actual encoded `UInt8Array`. `null` or `undefined` values returns an empty encoded array.
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringToU8a } from '@polkadot/util';
 *
 * stringToU8a('hello'); // [0x68, 0x65, 0x6c, 0x6c, 0x6f]
 * ```
 */
export default function stringToU8a (value?: string): Uint8Array {
  if (!value) {
    return new Uint8Array([]);
  } else if (encoder) {
    return encoder.encode(value);
  }

  const u8a = new Uint8Array(value.length);

  for (let i = 0; i < value.length; i++) {
    u8a[i] = value.charCodeAt(i);
  }

  return u8a;
}
