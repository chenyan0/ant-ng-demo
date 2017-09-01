export class Norm{
    id: number;
    name:string;
    standard:string;
    weight:number;
    goal:string;
    Jan:string;
    Feb:string;
}

export const norms:Norm[]=[
{   
    id: 1,
    name:'指标A',
    standard:'达到一级水平',
    weight:12,
    goal:'完成A任务',
    Jan:'100',
    Feb:'200',
},
{
    id: 2,
    name:'指标B',
    standard:'达到B标准',
    weight:20,
    goal:'完成B任务',
    Jan:'10',
    Feb:'20',  
},
{
    id: 3,
    name:'指标C',
    standard:'达到C标准',
    weight:50,
    goal:'完成C任务',
    Jan:'10',
    Feb:'20',
},
]