/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

type Command = "UP" | "RIGHT" | "DOWN" | "LEFT";

class HurdleRaceInput {
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


const HurdleRace = (input: HurdleRaceInput): Record<Command, number> => {
    if (input.course === "GAME_OVER" || [input.p1_stun, input.p2_stun, input.p3_stun][playerIdx] > 0) {
        return {
            "UP": 0,
            "LEFT": 0,
            "DOWN": 0,
            "RIGHT": 0
        }
    }
    const course = input.course + ".....";
    console.error(course);
    const players_position = [input.p1_position, input.p2_position, input.p3_position][playerIdx];
    const forward = course.slice(players_position + 1);
    console.error(forward);

    // if (forward.charAt(0) === "#") {
    //     return "UP";
    // } else if (forward.charAt(1) === "#") {
    //     return "LEFT";
    // } else if (forward.charAt(2) === "#") {
    //     return "DOWN";
    // }
    // return "RIGHT";
    const up: number = forward.charAt(0) === "#" ? 10 : forward.charAt(2) === "#" ? 5 : forward.charAt(1) === "#" ? -3 : 0;
    const left: number = forward.charAt(1) === "#" ? 3 : -1;
    const down: number = forward.charAt(2) === "#" ? 5 : forward.charAt(1) === "#" ? -3 : 0;
    const right: number = (forward.charAt(0) === "#" || forward.charAt(1) === "#") ? -2 : 1;
    return {
        "UP": up,
        "LEFT": left,
        "DOWN": down,
        "RIGHT": right
    }
}


class ArcheryInput {
    public wind_power: string;
    public p1_x: number;
    public p1_y: number;
    public p2_x: number;
    public p2_y: number;
    public p3_x: number;
    public p3_y: number;

    constructor(gpu: string, reg0: number, reg1: number, reg2: number, reg3: number, reg4: number, reg5: number, reg6: number) {
        this.wind_power = gpu;
        this.p1_x = reg0;
        this.p1_y = reg1;
        this.p2_x = reg2;
        this.p2_y = reg3;
        this.p3_x = reg4;
        this.p3_y = reg5;
    }
}

const Archery = (input: ArcheryInput): Record<Command, number> => {
    if (input.wind_power === "GAME_OVER") {
        return {
            "UP": 0,
            "LEFT": 0,
            "DOWN": 0,
            "RIGHT": 0
        }
    }
    const wind_power = input.wind_power;
    const players_x = [input.p1_x, input.p2_x, input.p3_x][playerIdx];
    const players_y = [input.p1_y, input.p2_y, input.p3_y][playerIdx];

    return {
        "UP": Math.ceil(Math.log(Math.max(-players_y, 1))),
        "LEFT": Math.ceil(Math.log(Math.max(players_x, 1))),
        "DOWN": Math.ceil(Math.log(Math.max(players_y, 1))),
        "RIGHT": Math.ceil(Math.log(Math.max(-players_x, 1)))
    }
}

class RollerSpeedSkatingInput {
    public riskOrder: string;
    public p1_spaces: number;
    public p2_spaces: number;
    public p3_spaces: number;
    public p1_risk: number;
    public p2_risk: number;
    public p3_risk: number;
    public remain_turn: number;
    public p1_stun: number;
    public p2_stun: number;
    public p3_stun: number;

    constructor(gpu: string, reg0: number, reg1: number, reg2: number, reg3: number, reg4: number, reg5: number, reg6: number) {
        this.riskOrder = gpu;
        this.p1_spaces = reg0;
        this.p2_spaces = reg1;
        this.p3_spaces = reg2;
        this.p1_risk = Math.max(reg3, 0);
        this.p2_risk = Math.max(reg4, 0);
        this.p3_risk = Math.max(reg5, 0);
        this.remain_turn = reg6;
        this.p1_stun = Math.max(-reg3, 0);
        this.p2_stun = Math.max(-reg4, 0);
        this.p3_stun = Math.max(-reg5, 0);
    }
}

const RollerSpeedSkating = (input: RollerSpeedSkatingInput): Record<Command, number> => {
    if (input.riskOrder === "GAME_OVER" || [input.p1_stun, input.p2_stun, input.p3_stun][playerIdx] > 0) {
        return {
            "UP": 0,
            "LEFT": 0,
            "DOWN": 0,
            "RIGHT": 0
        }
    }
    const riskOrder = input.riskOrder;
    const players_spaces = [input.p1_spaces, input.p2_spaces, input.p3_spaces][playerIdx];
    const remain_turn = input.remain_turn;
    const risk = [input.p1_risk, input.p2_risk, input.p3_risk][playerIdx];


    const score = [
        (risk == 0) ? -5 : -1,
        1,
        (risk == 4) ? -5 : 2,
        (remain_turn == 1) ? 50 : (risk == 4) ? 5 : (risk == 3) ? -5 : 3
    ]

    const up_score = score[riskOrder.indexOf("U")];
    const left_score = score[riskOrder.indexOf("L")];
    const down_score = score[riskOrder.indexOf("D")];
    const right_score = score[riskOrder.indexOf("R")];

    return {
        "UP": up_score,
        "LEFT": left_score,
        "DOWN": down_score,
        "RIGHT": right_score
    }
}

class DivingInput {
    public divingGoal: string;
    public p1_point: number;
    public p2_point: number;
    public p3_point: number;
    public p1_combo: number;
    public p2_combo: number;
    public p3_combo: number;

    constructor(gpu: string, reg0: number, reg1: number, reg2: number, reg3: number, reg4: number, reg5: number, reg6: number) {
        this.divingGoal = gpu;
        this.p1_point = reg0;
        this.p2_point = reg1;
        this.p3_point = reg2;
        this.p1_combo = reg3;
        this.p2_combo = reg4;
        this.p3_combo = reg5;
    }
}

const Diving = (input: DivingInput): Record<Command, number> => {
    if (input.divingGoal === "GAME_OVER") {
        return {
            "UP": 0,
            "LEFT": 0,
            "DOWN": 0,
            "RIGHT": 0
        }
    }
    const divingGoal = input.divingGoal;
    console.error('diving_goal:', divingGoal);
    const players_point = [input.p1_point, input.p2_point, input.p3_point][playerIdx];
    const players_combo = [input.p1_combo, input.p2_combo, input.p3_combo][playerIdx];

    if (Math.max(...[input.p1_point, input.p2_point, input.p3_point].splice(playerIdx)) === players_point) {
        const up_score = divingGoal.startsWith('U') ? 100 : 0;
        const left_score = divingGoal.startsWith('L') ? 100 : 0;
        const down_score = divingGoal.startsWith('D') ? 100 : 0;
        const right_score = divingGoal.startsWith('R') ? 100 : 0;
        return {
            "UP": up_score,
            "LEFT": left_score,
            "DOWN": down_score,
            "RIGHT": right_score
        }
    }

    const score = [
        (players_point < 10) ? -5 : 1,
        (players_point < 10) ? 1 : -5,
        (players_point < 10) ? -5 : 2,
        (players_point < 10) ? 2 : -5
    ]

    const up_score = score[divingGoal.indexOf("U")] ?? 0;
    const left_score = score[divingGoal.indexOf("L")] ?? 0;
    const down_score = score[divingGoal.indexOf("D")] ?? 0;
    const right_score = score[divingGoal.indexOf("R")] ?? 0;

    return {
        "UP": up_score,
        "LEFT": left_score,
        "DOWN": down_score,
        "RIGHT": right_score
    }
}

const playerIdx: number = parseInt(readline());
const nbGames: number = parseInt(readline());

// game loop
while (true) {
    for (let i = 0; i < 3; i++) {
        const scoreInfo: string = readline();
    }
    let totalScore: Record<Command, number> = {
        "UP": 0,
        "LEFT": 0,
        "DOWN": 0,
        "RIGHT": 0
    };
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

        let score: Record<Command, number>;
        if (i === 0) {
            const input: HurdleRaceInput = new HurdleRaceInput(gpu, reg0, reg1, reg2, reg3, reg4, reg5, reg6);
            score = HurdleRace(input);
        } else if (i === 1) {
            const input: ArcheryInput = new ArcheryInput(gpu, reg0, reg1, reg2, reg3, reg4, reg5, reg6);
            score = Archery(input);
        } else if (i === 2) {
            const input: RollerSpeedSkatingInput = new RollerSpeedSkatingInput(gpu, reg0, reg1, reg2, reg3, reg4, reg5, reg6);
            score = RollerSpeedSkating(input);
        } else {
            const input: DivingInput = new DivingInput(gpu, reg0, reg1, reg2, reg3, reg4, reg5, reg6);
            score = Diving(input);
        }
        console.error(score);

        for (const key in score) {
            totalScore[key] += score[key];
        }
    }

    const bestCommand: string = Object.keys(totalScore).reduce((a, b) => totalScore[a] > totalScore[b] ? a : b);
    console.log(bestCommand);
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
}
