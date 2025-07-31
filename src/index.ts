import { Context, Random, Schema } from "koishi";
import answers from "../resource/answers.json";
export const name = "answersbook";

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
    ctx.command("答案之书 <question>", "获取答案之书中的内容").action(async ({ session }, question) => {
        if (!question) {
            return "如果问题是空气的话，答案就是水";
        }
        if (question.trim() === "答案之书") {
            return "答案之书的答案，真是一个有趣的问题";
        }
        return Random.pick(answers);
    });
}
