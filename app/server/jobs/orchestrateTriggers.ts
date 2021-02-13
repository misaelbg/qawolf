import { createSuiteForTrigger } from "../models/suite";
import { findPendingTriggers, updateTriggerNextAt } from "../models/trigger";
import { ModelOptions } from "../types";

export const orchestrateTriggers = async ({
  db,
  logger,
}: ModelOptions): Promise<void> => {
  const log = logger.prefix("orchestrateTriggers");

  await db.transaction(async (trx) => {
    const triggers = await findPendingTriggers({ db: trx, logger });

    const triggerPromises = triggers.map(async (trigger) => {
      await createSuiteForTrigger(
        { trigger_id: trigger.id, team_id: trigger.team_id },
        { db: trx, logger }
      );

      await updateTriggerNextAt(trigger, { db: trx, logger });
    });

    await Promise.all(triggerPromises);
  });

  log.debug("success");
};
