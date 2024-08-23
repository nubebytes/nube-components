import { useEditor } from '@/editor/hooks/useEditor';
import { useCanvas } from '@/editor/stores/canvas.store';
import { Chip, Slider, Typography } from '@material-tailwind/react';

export const OpacitySlider = () => {
  const { editor } = useEditor();
  const {
    selectedShapes: [firstShape],
  } = useCanvas();

  const opacityPerc = firstShape.opacity * 100;

  return (
    <>
      <Typography variant="small" className="mb-3 font-bold">
        Opacidad
      </Typography>

      <div className="flex items-center gap-2">
        <Chip
          size="sm"
          className="min-w-10 flex items-center justify-center"
          variant="gradient"
          value={`${opacityPerc.toFixed(0)}%`}
        />
        <Slider
          size="sm"
          min={0.00001}
          max={100}
          value={opacityPerc}
          onChange={(e) => {
            editor.setOpacityForSelectedShapes(e.target.valueAsNumber / 100);
          }}
        />
      </div>
    </>
  );
};
