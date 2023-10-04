const mapping: Record<string, string> = {
  actions: 'action',
  businesses: 'business',
  clicks: 'click',
  designs: 'design',
  users: 'user',
  'video-players': 'video_player',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
