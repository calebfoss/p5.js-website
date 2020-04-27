/*
<<<<<<< HEAD
 * @name 사운드 불러오기/재생
 * @description preload()중 사운드 불러오기. 캔버스가 클릭될 때마다 소리를 재생합니다.
 * <br><br><p><em><span class="small"> 로컬 프로젝트에서 이 예제를 실행하려면 적어도 한 개의 사운드 파일이 필요하고,
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound 라이브러리</a>를 추가해야 되며, 
 * <a href="https://github.com/processing/p5.js/wiki/Local-server">로컬 서버</a>를 작동시켜야 합니다.</span></em></p><br><br>
=======
 * @name Load and Play Sound
 * @description Load sound during preload(). Play a sound when canvas is clicked.
 * <br><br><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * a sound file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em>
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
 */
let song;

function setup() {
  song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
<<<<<<< HEAD
    // .isPlaying()은 불리언 값을 반환합니다.
=======
    // .isPlaying() returns a boolean
>>>>>>> cf3314557fcd084720a3cbca0fa45ce5ce151753
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
