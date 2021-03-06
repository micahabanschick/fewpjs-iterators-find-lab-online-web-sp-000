const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(team) {
  let found = team.find(team => team.result === "W");
  if (!!found) {
    return found.year;
  } else {
    return undefined;
  }
}
