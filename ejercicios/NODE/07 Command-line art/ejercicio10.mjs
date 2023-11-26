function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResults() {
  try {
    const players = ["Tina", "Jorge", "Julien"];
    await players.forEach((player) => {
      luckyDraw(player)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error.message);
        });
    });
  } catch (error) {
    console.log(error);
  }
}

getResults();
