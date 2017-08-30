$(document).ready(() => {
  // 49-50-51-52-53-54-55-56-57-48-189-187-81-87-69-82-84-89-85-73-79-80-219-221-65-83-68-70-71-72-74-75-76-186-222-13-90-88-67-86-66-78-77-188-190-191-16-32
  const sound49 = new Howl({
    src: ['./piano/piano-ff-062.wav']
  });
  const sound50 = new Howl({
    src: ['./piano/piano-ff-061.wav']
  });
  const sound51 = new Howl({
    src: ['./piano/piano-ff-060.wav']
  });
  const sound52 = new Howl({
    src: ['./piano/piano-ff-059.wav']
  });
  const sound53 = new Howl({
    src: ['./piano/piano-ff-058.wav']
  });
  const sound54 = new Howl({
    src: ['./piano/piano-ff-057.wav']
  });
  const sound55 = new Howl({
    src: ['./piano/piano-ff-056.wav']
  });
  const sound56 = new Howl({
    src: ['./piano/piano-ff-055.wav']
  });
  const sound57 = new Howl({
    src: ['./piano/piano-ff-054.wav']
  });
  const sound48 = new Howl({
    src: ['./piano/piano-ff-053.wav']
  });
  const sound189 = new Howl({
    src: ['./piano/piano-ff-052.wav']
  });
  const sound187 = new Howl({
    src: ['./piano/piano-ff-051.wav']
  });
  const sound81 = new Howl({
    src: ['./piano/piano-ff-050.wav']
  });
  const sound87 = new Howl({
    src: ['./piano/piano-ff-049.wav']
  });
  const sound69 = new Howl({
    src: ['./piano/piano-ff-048.wav']
  });
  const sound82 = new Howl({
    src: ['./piano/piano-ff-047.wav']
  });
  const sound84 = new Howl({
    src: ['./piano/piano-ff-046.wav']
  });
  const sound89 = new Howl({
    src: ['./piano/piano-ff-045.wav']
  });
  const sound85 = new Howl({
    src: ['./piano/piano-ff-044.wav']
  });
  const sound73 = new Howl({
    src: ['./piano/piano-ff-043.wav']
  });
  const sound79 = new Howl({
    src: ['./piano/piano-ff-042.wav']
  });
  const sound80 = new Howl({
    src: ['./piano/piano-ff-041.wav']
  });
  const sound219 = new Howl({
    src: ['./piano/piano-ff-040.wav']
  });
  const sound221 = new Howl({
    src: ['./piano/piano-ff-039.wav']
  });
  const sound65 = new Howl({
    src: ['./piano/piano-ff-038.wav']
  });
  const sound83 = new Howl({
    src: ['./piano/piano-ff-037.wav']
  });
  const sound68 = new Howl({
    src: ['./piano/piano-ff-036.wav']
  });
  const sound70 = new Howl({
    src: ['./piano/piano-ff-035.wav']
  });
  const sound71 = new Howl({
    src: ['./piano/piano-ff-034.wav']
  });
  const sound72 = new Howl({
    src: ['./piano/piano-ff-033.wav']
  });
  const sound74 = new Howl({
    src: ['./piano/piano-ff-032.wav']
  });
  const sound75 = new Howl({
    src: ['./piano/piano-ff-031.wav']
  });
  const sound76 = new Howl({
    src: ['./piano/piano-ff-030.wav']
  });
  const sound186 = new Howl({
    src: ['./piano/piano-ff-029.wav']
  });
  const sound222 = new Howl({
    src: ['./piano/piano-ff-028.wav']
  });
  const sound13 = new Howl({
    src: ['./piano/piano-ff-027.wav']
  });
  const sound90 = new Howl({
    src: ['./piano/piano-ff-026.wav']
  });
  const sound88 = new Howl({
    src: ['./piano/piano-ff-025.wav']
  });
  const sound67 = new Howl({
    src: ['./piano/piano-ff-024.wav']
  });
  const sound86 = new Howl({
    src: ['./piano/piano-ff-023.wav']
  });
  const sound66 = new Howl({
    src: ['./piano/piano-ff-022.wav']
  });
  const sound78 = new Howl({
    src: ['./piano/piano-ff-021.wav']
  });
  const sound77 = new Howl({
    src: ['./piano/piano-ff-020.wav']
  });
  const sound188 = new Howl({
    src: ['./piano/piano-ff-019.wav']
  });
  const sound190 = new Howl({
    src: ['./piano/piano-ff-018.wav']
  });
  const sound191 = new Howl({
    src: ['./piano/piano-ff-017.wav']
  });
  const sound16 = new Howl({
    src: ['./piano/piano-ff-016.wav']
  });
  const sound32 = new Howl({
    src: ['./piano/piano-ff-015.wav']
  });
  sound32.play();
  const keyboard = {
    49: sound49,
    50: sound50,
    51: sound51,
    52: sound52,
    53: sound53,
    54: sound54,
    55: sound55,
    56: sound56,
    57: sound57,
    48: sound48,
    189: sound189,
    187: sound187,
    81: sound81,
    87: sound87,
    69: sound69,
    82: sound82,
    84: sound84,
    89: sound89,
    85: sound85,
    73: sound73,
    79: sound79,
    80: sound80,
    219: sound219,
    221: sound221,
    65: sound65,
    83: sound83,
    68: sound68,
    70: sound70,
    71: sound71,
    72: sound72,
    74: sound74,
    75: sound75,
    76: sound76,
    186: sound186,
    222: sound222,
    13: sound13,
    90: sound90,
    88: sound88,
    86: sound86,
    66: sound66,
    78: sound78,
    77: sound77,
    188: sound188,
    190: sound190,
    191: sound191,
    16: sound16,
    32: sound32
  }
  
  
  const change = (e) => {
    let kc = e.keyCode;
    const ebony = [50, 52, 55, 57, 189, 87, 82, 85, 79, 219, 83, 70, 74, 76, 222, 88, 86, 77, 190, 16];
    const ivory = [49, 51, 53, 54, 56, 48, 187, 81, 69, 84, 89, 73, 80, 221, 65, 68, 71, 72, 75, 186, 13, 90, 67, 66, 78, 188, 191, 32]
    let bcolor = document.getElementById(kc).style;
    if (ivory.includes(kc)) {
      if (!bcolor.backgroundColor || bcolor.backgroundColor === "ivory") {
        bcolor.backgroundColor = "rgba(150, 25, 65, .5)";
      } else {
        bcolor.backgroundColor = "ivory";
      }
    }
    if (ebony.includes(kc)) {
      if (!bcolor.backgroundColor || bcolor.backgroundColor === "black") {
        bcolor.backgroundColor = "rgba(150, 25, 65, .5)";
      } else {
        bcolor.backgroundColor = "black";
      }
    }
  }
  const playnChange = (e) => {
    let soundStr = 'sound';
    let keyStr = e.keyCode.toString();
    let key = keyboard[keyStr];
    soundStr += keyStr;
    change(e);
    key.play();
    
  }
  window.addEventListener("keydown", playnChange, false);
  window.addEventListener("keyup", change, false);
  /* const sound = new Pizzicato.Sound({
    source: 'file',
    options: { path: './piano/39148__jobro__piano-ff-001.wav' }
  }, () => {
    console.log('lock n load');
  });
  sound.play(); */
});