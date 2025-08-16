/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * @see https://github.com/ant-design/ant-design/blob/master/scripts/generate-llms.ts
 */
export async function generateLLms(): Promise<void> {
  console.log('Generated llms.txt and llms-full.txt');
}

(async () => {
  if (require.main === module) {
    await generateLLms();
  }
})().catch(e => {
  console.error(e);
  process.exit(1);
});
