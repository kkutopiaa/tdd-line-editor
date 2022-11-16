import Konva from "konva";

export class LineEditor extends Konva.Group {

    private line?: Konva.Line;

    attach(line: Konva.Line) {
        this.line = line;
        line.on('pointsChange', () => {
            this.update();
        });

        this.update();
    }

    update() {
        let points = this.line!.points();
        let previous = -1;
        for (let i = 0; i < points.length / 2; i++) {
            this.get(i, `anchor`).setAttrs({x: points[i * 2], y: points[i * 2 + 1]});
            if (previous !== -1) {
                this.get(i, `control`).setAttrs({
                    x: points[previous * 2] + (points[i * 2] - points[previous * 2]) / 2,
                    y: points[previous * 2 + 1] + (points[i * 2 + 1] - points[previous * 2 + 1]) / 2,
                });
            }
            previous = i;
        }
    }

    private get(index: number, type: string) {
        return this.findOne(`.${index} -${type}`) || this.create(index, type);
    }

    private create(index: number, type: string) {
        let point = new Konva.Circle({name: `${index}-${type}`, radius: 10});
        if (type === 'anchor') {
            point.draggable(true);
        }
        this.add(point);
        return point;
    }

}
