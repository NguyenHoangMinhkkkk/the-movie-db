export default (() => {
  function createAlphaColor(red: number, green: number, blue: number) {
    return function getAlphaColor(alpha: number = 1): string {
      return `rgba(${red},${green},${blue},${alpha})`;
    };
  }

  const blue = {
    x95: (alpha: number = 1) => createAlphaColor(23, 37, 84)(alpha), // rgba(23, 37, 84, 1)
    x9: (alpha: number = 1) => createAlphaColor(30, 58, 138)(alpha), // rgba(30, 58, 138, 1)
    x8: (alpha: number = 1) => createAlphaColor(30, 64, 175)(alpha), // rgba(30, 64, 175, 1)
    x7: (alpha: number = 1) => createAlphaColor(29, 78, 216)(alpha), // rgba(29, 78, 216, 1)
    x6: (alpha: number = 1) => createAlphaColor(37, 99, 235)(alpha), // rgba(37, 99, 235, 1)
    x5: (alpha: number = 1) => createAlphaColor(59, 130, 246)(alpha), // rgba(59, 130, 246, 1)
    x4: (alpha: number = 1) => createAlphaColor(96, 165, 250)(alpha), // rgba(96, 165, 250, 1)
    x3: (alpha: number = 1) => createAlphaColor(147, 197, 253)(alpha), // rgba(147, 197, 253, 1)
    x2: (alpha: number = 1) => createAlphaColor(191, 219, 254)(alpha), // rgba(191, 219, 254, 1)
    x1: (alpha: number = 1) => createAlphaColor(210, 234, 254)(alpha), // rgba(210, 234, 254, 1)
    x05: (alpha: number = 1) => createAlphaColor(239, 246, 255)(alpha), // rgba(239, 246, 255, 1)
  };

  const gray = {
    x95: (alpha: number = 1) => createAlphaColor(9, 9, 11)(alpha), // rgba(9, 9, 11, 1)
    x9: (alpha: number = 1) => createAlphaColor(24, 24, 27)(alpha), // rgba(24, 24, 27, 1)
    x8: (alpha: number = 1) => createAlphaColor(39, 39, 42)(alpha), // rgba(39, 39, 42, 1)
    x7: (alpha: number = 1) => createAlphaColor(63, 63, 70)(alpha), // rgba(63, 63, 70, 1)
    x6: (alpha: number = 1) => createAlphaColor(82, 82, 91)(alpha), // rgba(82, 82, 91, 1)
    x5: (alpha: number = 1) => createAlphaColor(113, 113, 122)(alpha), // rgba(113, 113, 122, 1)
    x4: (alpha: number = 1) => createAlphaColor(161, 161, 170)(alpha), // rgb(161, 161, 170)
    x3: (alpha: number = 1) => createAlphaColor(212, 212, 216)(alpha), // rgba(212, 212, 216, 1)
    x2: (alpha: number = 1) => createAlphaColor(228, 228, 231)(alpha), // rgba(228, 228, 231, 1)
    x1: (alpha: number = 1) => createAlphaColor(244, 244, 245)(alpha), // rgba(244, 244, 245, 1)
    x05: (alpha: number = 1) => createAlphaColor(250, 250, 250)(alpha), // rgba(250, 250, 250, 1)
  };

  const red = {
    x95: (alpha: number = 1) => createAlphaColor(69, 10, 10)(alpha), // rgba(69, 10, 10, 1)
    x9: (alpha: number = 1) => createAlphaColor(127, 29, 29)(alpha), // rgba(127, 29, 29, 1)
    x8: (alpha: number = 1) => createAlphaColor(153, 27, 27)(alpha), // rgba(153, 27, 27, 1)
    x7: (alpha: number = 1) => createAlphaColor(185, 28, 28)(alpha), // rgba(185, 28, 28, 1)
    x6: (alpha: number = 1) => createAlphaColor(220, 38, 38)(alpha), // rgba(220, 38, 38, 1)
    x5: (alpha: number = 1) => createAlphaColor(239, 68, 68)(alpha), // rgba(239, 68, 68, 1)
    x4: (alpha: number = 1) => createAlphaColor(248, 113, 113)(alpha), // rgba(248, 113, 113, 1)
    x3: (alpha: number = 1) => createAlphaColor(252, 165, 165)(alpha), // rgba(252, 165, 165, 1)
    x2: (alpha: number = 1) => createAlphaColor(254, 202, 202)(alpha), // rgba(254, 202, 202, 1)
    x1: (alpha: number = 1) => createAlphaColor(254, 226, 226)(alpha), // rgba(254, 226, 226, 1)
    x05: (alpha: number = 1) => createAlphaColor(254, 242, 242)(alpha), // rgba(254, 242, 242, 1)
  };

  const pink = {
    x95: (alpha: number = 1) => createAlphaColor(80, 7, 36)(alpha), // rgba(80, 7, 36, 1)
    x9: (alpha: number = 1) => createAlphaColor(131, 24, 67)(alpha), // rgba(131, 24, 67, 1)
    x8: (alpha: number = 1) => createAlphaColor(157, 23, 77)(alpha), // rgba(157, 23, 77, 1)
    x7: (alpha: number = 1) => createAlphaColor(190, 24, 93)(alpha), // rgba(190, 24, 93, 1)
    x6: (alpha: number = 1) => createAlphaColor(219, 39, 119)(alpha), // rgba(219, 39, 119, 1)
    x5: (alpha: number = 1) => createAlphaColor(236, 72, 153)(alpha), // rgba(236, 72, 153, 1)
    x4: (alpha: number = 1) => createAlphaColor(244, 114, 182)(alpha), // rgba(244, 114, 182, 1)
    x3: (alpha: number = 1) => createAlphaColor(249, 168, 212)(alpha), // rgba(249, 168, 212, 1)
    x2: (alpha: number = 1) => createAlphaColor(251, 207, 232)(alpha), // rgba(251, 207, 232, 1)
    x1: (alpha: number = 1) => createAlphaColor(252, 231, 243)(alpha), // rgba(252, 231, 243, 1)
    x05: (alpha: number = 1) => createAlphaColor(253, 242, 248)(alpha), // rgba(253, 242, 248, 1)
  };

  const orange = {
    x95: (alpha: number = 1) => createAlphaColor(67, 20, 7)(alpha), // rgba(67, 20, 7, 1)
    x9: (alpha: number = 1) => createAlphaColor(124, 45, 18)(alpha), // rgba(124, 45, 18, 1)
    x8: (alpha: number = 1) => createAlphaColor(154, 52, 18)(alpha), // rgba(154, 52, 18, 1)
    x7: (alpha: number = 1) => createAlphaColor(194, 65, 12)(alpha), // rgba(194, 65, 12, 1)
    x6: (alpha: number = 1) => createAlphaColor(234, 88, 12)(alpha), // rgba(234, 88, 12, 1)
    x5: (alpha: number = 1) => createAlphaColor(249, 115, 22)(alpha), // rgba(249, 115, 22, 1)
    x4: (alpha: number = 1) => createAlphaColor(251, 146, 60)(alpha), // rgba(251, 146, 60, 1)
    x3: (alpha: number = 1) => createAlphaColor(253, 186, 116)(alpha), // rgba(253, 186, 116, 1)
    x2: (alpha: number = 1) => createAlphaColor(254, 215, 170)(alpha), // rgba(254, 215, 170, 1)
    x1: (alpha: number = 1) => createAlphaColor(255, 237, 213)(alpha), // rgba(255, 237, 213, 1)
    x05: (alpha: number = 1) => createAlphaColor(255, 247, 237)(alpha), // rgba(255, 247, 237, 1)
  };

  const yellow = {
    x95: (alpha: number = 1) => createAlphaColor(69, 26, 3)(alpha), // rgba(69, 26, 3, 1)
    x9: (alpha: number = 1) => createAlphaColor(120, 53, 15)(alpha), // rgba(120, 53, 15, 1)
    x8: (alpha: number = 1) => createAlphaColor(146, 64, 14)(alpha), // rgba(146, 64, 14, 1)
    x7: (alpha: number = 1) => createAlphaColor(180, 83, 9)(alpha), // rgba(180, 83, 9, 1)
    x6: (alpha: number = 1) => createAlphaColor(217, 119, 6)(alpha), // rgba(217, 119, 6, 1)
    x5: (alpha: number = 1) => createAlphaColor(245, 158, 11)(alpha), // rgba(245, 158, 11, 1)
    x4: (alpha: number = 1) => createAlphaColor(251, 191, 36)(alpha), // rgba(251, 191, 36, 1)
    x3: (alpha: number = 1) => createAlphaColor(252, 211, 77)(alpha), // rgba(252, 211, 77, 1)
    x2: (alpha: number = 1) => createAlphaColor(253, 230, 138)(alpha), // rgba(253, 230, 138, 1)
    x1: (alpha: number = 1) => createAlphaColor(254, 243, 199)(alpha), // rgba(254, 243, 199, 1)
    x05: (alpha: number = 1) => createAlphaColor(255, 251, 235)(alpha), // rgba(255, 251, 235, 1)
  };

  const green = {
    x95: (alpha: number = 1) => createAlphaColor(2, 44, 34)(alpha), // rgba(2, 44, 34, 1)
    x9: (alpha: number = 1) => createAlphaColor(6, 78, 59)(alpha), // rgba(6, 78, 59, 1)
    x8: (alpha: number = 1) => createAlphaColor(6, 95, 70)(alpha), // rgba(6, 95, 70, 1)
    x7: (alpha: number = 1) => createAlphaColor(4, 120, 87)(alpha), // rgba(4, 120, 87, 1)
    x6: (alpha: number = 1) => createAlphaColor(5, 150, 105)(alpha), // rgba(5, 150, 105, 1)
    x5: (alpha: number = 1) => createAlphaColor(16, 185, 129)(alpha), // rgba(16, 185, 129, 1)
    x4: (alpha: number = 1) => createAlphaColor(52, 211, 153)(alpha), // rgba(52, 211, 153, 1)
    x3: (alpha: number = 1) => createAlphaColor(110, 231, 183)(alpha), // rgba(110, 231, 183, 1)
    x2: (alpha: number = 1) => createAlphaColor(167, 243, 208)(alpha), // rgba(167, 243, 208, 1)
    x1: (alpha: number = 1) => createAlphaColor(209, 250, 229)(alpha), // rgba(209, 250, 229, 1)
    x05: (alpha: number = 1) => createAlphaColor(236, 253, 245)(alpha), // rgba(236, 253, 245, 1)
  };

  const teal = {
    x95: (alpha: number = 1) => createAlphaColor(4, 47, 46)(alpha), // rgba(4, 47, 46, 1)
    x9: (alpha: number = 1) => createAlphaColor(19, 78, 74)(alpha), // rgba(19, 78, 74, 1)
    x8: (alpha: number = 1) => createAlphaColor(19, 94, 89)(alpha), // rgba(19, 94, 89, 1)
    x7: (alpha: number = 1) => createAlphaColor(15, 118, 110)(alpha), // rgba(15, 118, 110, 1)
    x6: (alpha: number = 1) => createAlphaColor(13, 148, 136)(alpha), // rgba(13, 148, 136, 1)
    x5: (alpha: number = 1) => createAlphaColor(20, 184, 166)(alpha), // rgba(20, 184, 166, 1)
    x4: (alpha: number = 1) => createAlphaColor(44, 212, 191)(alpha), // rgba(44, 212, 191, 1)
    x3: (alpha: number = 1) => createAlphaColor(94, 234, 212)(alpha), // rgba(94, 234, 212, 1)
    x2: (alpha: number = 1) => createAlphaColor(153, 246, 228)(alpha), // rgba(153, 246, 228, 1)
    x1: (alpha: number = 1) => createAlphaColor(204, 251, 241)(alpha), // rgba(204, 251, 241, 1)
    x05: (alpha: number = 1) => createAlphaColor(240, 253, 250)(alpha), // rgba(240, 253, 250, 1)
  };

  const sky = {
    x95: (alpha: number = 1) => createAlphaColor(8, 47, 73)(alpha), // rgba(8, 47, 73, 1)
    x9: (alpha: number = 1) => createAlphaColor(12, 74, 110)(alpha), // rgba(12, 74, 110, 1)
    x8: (alpha: number = 1) => createAlphaColor(7, 89, 133)(alpha), // rgba(7, 89, 133, 1)
    x7: (alpha: number = 1) => createAlphaColor(3, 105, 161)(alpha), // rgba(3, 105, 161, 1)
    x6: (alpha: number = 1) => createAlphaColor(2, 132, 199)(alpha), // rgba(2, 132, 199, 1)
    x5: (alpha: number = 1) => createAlphaColor(14, 165, 233)(alpha), // rgba(14, 165, 233, 1)
    x4: (alpha: number = 1) => createAlphaColor(56, 189, 248)(alpha), // rgba(56, 189, 248, 1)
    x3: (alpha: number = 1) => createAlphaColor(125, 211, 252)(alpha), // rgba(125, 211, 252, 1)
    x2: (alpha: number = 1) => createAlphaColor(186, 230, 253)(alpha), // rgba(186, 230, 253, 1)
    x1: (alpha: number = 1) => createAlphaColor(224, 242, 254)(alpha), // rgba(224, 242, 254, 1)
    x05: (alpha: number = 1) => createAlphaColor(240, 249, 255)(alpha), // rgba(240, 249, 255, 1)
  };

  const indigo = {
    x95: (alpha: number = 1) => createAlphaColor(30, 27, 75)(alpha), // rgba(30, 27, 75, 1)
    x9: (alpha: number = 1) => createAlphaColor(49, 46, 129)(alpha), // rgba(49, 46, 129, 1)
    x8: (alpha: number = 1) => createAlphaColor(55, 48, 163)(alpha), // rgba(55, 48, 163, 1)
    x7: (alpha: number = 1) => createAlphaColor(67, 56, 202)(alpha), // rgba(67, 56, 202, 1)
    x6: (alpha: number = 1) => createAlphaColor(79, 70, 229)(alpha), // rgba(79, 70, 229, 1)
    x5: (alpha: number = 1) => createAlphaColor(99, 102, 241)(alpha), // rgba(99, 102, 241, 1)
    x4: (alpha: number = 1) => createAlphaColor(129, 140, 248)(alpha), // rgba(129, 140, 248, 1)
    x3: (alpha: number = 1) => createAlphaColor(165, 180, 252)(alpha), // rgba(165, 180, 252, 1)
    x2: (alpha: number = 1) => createAlphaColor(199, 210, 254)(alpha), // rgba(199, 210, 254, 1)
    x1: (alpha: number = 1) => createAlphaColor(224, 231, 255)(alpha), // rgba(224, 231, 255, 1)
    x05: (alpha: number = 1) => createAlphaColor(238, 242, 255)(alpha), // rgba(238, 242, 255, 1)
  };

  const purple = {
    x95: (alpha: number = 1) => createAlphaColor(59, 7, 100)(alpha), // rgba(59, 7, 100, 1)
    x9: (alpha: number = 1) => createAlphaColor(88, 28, 135)(alpha), // rgba(88, 28, 135, 1)
    x8: (alpha: number = 1) => createAlphaColor(107, 33, 168)(alpha), // rgba(107, 33, 168, 1)
    x7: (alpha: number = 1) => createAlphaColor(126, 34, 206)(alpha), // rgba(126, 34, 206, 1)
    x6: (alpha: number = 1) => createAlphaColor(147, 51, 234)(alpha), // rgba(147, 51, 234, 1)
    x5: (alpha: number = 1) => createAlphaColor(168, 85, 247)(alpha), // rgba(168, 85, 247, 1)
    x4: (alpha: number = 1) => createAlphaColor(192, 132, 252)(alpha), // rgba(192, 132, 252, 1)
    x3: (alpha: number = 1) => createAlphaColor(216, 180, 254)(alpha), // rgba(216, 180, 254, 1)
    x2: (alpha: number = 1) => createAlphaColor(233, 213, 255)(alpha), // rgba(233, 213, 255, 1)
    x1: (alpha: number = 1) => createAlphaColor(243, 232, 255)(alpha), // rgba(243, 232, 255, 1)
    x05: (alpha: number = 1) => createAlphaColor(250, 245, 255)(alpha), // rgba(250, 245, 255, 1)
  };

  const blackA = (alpha: number = 1) => createAlphaColor(0, 0, 0)(alpha);
  const whiteA = (alpha: number = 1) => createAlphaColor(255, 255, 255)(alpha);

  return {
    transparent: 'transparent',
    createAlphaColor,
    blackA,
    whiteA,
    black: blackA(1),
    white: whiteA(1),
    gray,
    sky,
    blue,
    red,
    orange,
    yellow,
    green,
    teal,
    indigo,
    purple,
    pink,
  };
})();
