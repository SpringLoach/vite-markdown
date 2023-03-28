/** 设计稿宽度 */
let designDraftWidth = 1920;

export const transformStyle = (style) => {
  // 匹配样式中的rpx单位，如 12rpx
  const rpxRE = /[0-9]+(.*?)rpx/g;
  const rpxList = style.match(rpxRE);
  let transformCode = style;
  rpxList?.forEach((rpx) => {
    const origin = rpx.replace("rpx", "");
    const vw = `${(origin * 100) / 1920}vw`;
    // 将 style 标签的内容替换
    transformCode = transformCode.replace(rpx, vw);
  });

  return transformCode;
};

export default function unitFitPlugin(val) {
  designDraftWidth = val || 1920;
  const vueRE = /\.vue$/;
  const styleRE = /(?<=\<style scoped\>)[\s\S]*(?=\<\/style\>)/g;

  return {
    // 插件名称
    name: "vite:unitFit",

    // 该插件在 plugin-vue 插件之前执行，这样就可以直接解析到原模板文件
    enforce: "pre",

    // 代码转译，这个函数的功能类似于 `webpack` 的 `loader`
    transform(code, id, opt) {
      if (!vueRE.test(id) || !styleRE.test(code)) return code;

      const styleList = code.match(styleRE);
      let transformCode = code;
      styleList?.forEach((style) => {
        // 将 style 标签的内容替换
        transformCode = transformCode.replace(style, transformStyle(style));
      });

      // 将转换后的代码返回
      return transformCode;
    },
  };
}
