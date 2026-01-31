'use server';

import { z } from 'zod';

const launchSchema = z.object({
  pageId: z.string(),
  adCount: z.coerce.number().min(1).max(5),
});

export type LaunchCampaignResult = {
  success: boolean;
  error?: string;
  redirectTo?: string;
  campaignName?: string;
  campaignId?: string;
};

/**
 * Legacy launch action. Redirects to /campaigns for campaign management.
 */
export async function launchCampaign(formData: FormData): Promise<LaunchCampaignResult> {
  const validatedFields = launchSchema.safeParse({
    pageId: formData.get('pageId'),
    adCount: formData.get('adCount'),
  });

  if (!validatedFields.success) {
    return { success: false, error: 'Invalid form data.', redirectTo: '/campaigns' };
  }

  const videoFile = formData.get('videoFile') as File;
  if (!videoFile || videoFile.size === 0) {
    return { success: false, error: 'Video file is required.', redirectTo: '/campaigns' };
  }

  return {
    success: false,
    error: 'Use the Automated Ad Creator for real campaign creation.',
    redirectTo: '/campaigns',
  };
}
