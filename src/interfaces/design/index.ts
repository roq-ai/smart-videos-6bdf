import { UserInterface } from 'interfaces/user';
import { VideoPlayerInterface } from 'interfaces/video-player';
import { GetQueryInterface } from 'interfaces';

export interface DesignInterface {
  id?: string;
  name: string;
  description?: string;
  user_id: string;
  video_player_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  video_player?: VideoPlayerInterface;
  _count?: {};
}

export interface DesignGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
  video_player_id?: string;
}
