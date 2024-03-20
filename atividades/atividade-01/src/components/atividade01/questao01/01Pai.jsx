import { ComponentChild } from './01Filho';

function ComponentFather() {
  return (
    <div>
      <ComponentChild
        altura={1.8}
        peso={90}
      />
    </div>
  );
}

export { ComponentFather };
