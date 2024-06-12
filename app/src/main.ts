/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

type Command = "UP" | "RIGHT" | "DOWN" | "LEFT";

class Input {
    public course: string;
    public p1_position: number;
    public p2_position: number;
    public p3_position: number;
    public p1_stun: number;
    public p2_stun: number;
    public p3_stun: number;

    constructor(gpu: string, reg0: number, reg1: number, reg2: number, reg3: number, reg4: number, reg5: number, reg6: number) {
        this.course = gpu;
        this.p1_position = reg0;
        this.p2_position = reg1;
        this.p3_position = reg2;
        this.p1_stun = reg3;
        this.p2_stun = reg4;
        this.p3_stun = reg5;
    }
}


const getWhatToDo = (input: Input): Command => {
    const course = input.course + ".....";
    console.error(course);
    const players_position = [input.p1_position, input.p2_position, input.p3_position][playerIdx];
    const forward = course.slice(players_position + 1);
    console.error(forward);

    if (forward.charAt(0) === "#") {
        return "UP";
    } else if (forward.charAt(1) === "#") {
        return "LEFT";
    } else if (forward.charAt(2) === "#") {
        return "DOWN";
    }
    return "RIGHT";
}



const playerIdx: number = parseInt(readline());
const nbGames: number = parseInt(readline());

// game loop
while (true) {
    for (let i = 0; i < 3; i++) {
        const scoreInfo: string = readline();
    }
    for (let i = 0; i < nbGames; i++) {
        var inputs: string[] = readline().split(' ');
        const gpu: string = inputs[0];
        const reg0: number = parseInt(inputs[1]);
        const reg1: number = parseInt(inputs[2]);
        const reg2: number = parseInt(inputs[3]);
        const reg3: number = parseInt(inputs[4]);
        const reg4: number = parseInt(inputs[5]);
        const reg5: number = parseInt(inputs[6]);
        const reg6: number = parseInt(inputs[7]);

        const input: Input = new Input(gpu, reg0, reg1, reg2, reg3, reg4, reg5, reg6);
        const command: Command = getWhatToDo(input);
        console.log(command.toString());

    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
}
