import { motion } from "motion/react";
import { publications } from "../datas/dataConf";
import { Card } from "../ui/Card";

export const Conf = () => {
    return (
        <div className="m-2 ">
            <Card project={publications} />
        </div>
    );
};