import { useState, useEffect } from "react";
import { createStage } from "../../gameHelpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  // const [stage, setStage] = useState(player, resetPlayer);

  useEffect(() => {
    const updateStage = prevStage => {
      // clear
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // draw
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collded ? "merged" : "clear"}`
            ];
          }
        });
      });

      if (player.collided) {
        resetPlayer();
      }

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player.collided, player.pos.x, player.pos.y, player.tetromino]);
  return [stage, setStage];
};
