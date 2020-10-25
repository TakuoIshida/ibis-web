
export const sampleData = {
    stars: 100,
    archived: true,
    description: "you got data",
    dev: {
        checkbox: true,
        textbox: "write here",
    },
  } as const;

export type sampleData = {
stars: number,
archived: boolean,
description: string,
dev: {
    checkbox: boolean;
    // ?は存在すれば受け取る。
    // textbox?: string;
    textbox: string;
},
// error response
statusCode?: number,
message?: string
};