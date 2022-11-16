import Konva from "konva";

export class LineEditor extends Konva.Group {

    private line?: Konva.Line;

    attach(line: Konva.Line) {
        let points = line.points();
        let previous = -1;

        for (let i = 0; i < points.length / 2; i++) {
            this.create(`${i}-anchor`).setAttrs({x: points[i * 2], y: points[i * 2 + 1]});
            if (previous !== -1) {
                this.create(`${i}-control`)
                    .setAttrs({
                        x: points[previous * 2] + (points[i * 2] - points[previous * 2]) / 2,
                        y: points[previous * 2 + 1] + (points[i * 2 + 1] - points[previous * 2 + 1]) / 2,
                    });
            }
            previous = i;
        }

        this.line = line;
        line.on('pointsChange', () => {
            this.update();
        });

    }

    update() {
        let points = this.line!.points();
        let previous = -1;
        for (let i = 0; i < points.length / 2; i++) {
            this.findOne(`.${i}-anchor`).setAttrs({x: points[i * 2], y: points[i * 2 + 1]});
            if (previous !== -1) {
                this.findOne(`.${i}-control`).setAttrs({
                    x: points[previous * 2] + (points[i * 2] - points[previous * 2]) / 2,
                    y: points[previous * 2 + 1] + (points[i * 2 + 1] - points[previous * 2 + 1]) / 2,
                });
            }
            previous = i;
        }
    }


    private create(name: string) {
        let point = new Konva.Circle({name, radius: 10});
        this.add(point);
        return point;
    }

}
