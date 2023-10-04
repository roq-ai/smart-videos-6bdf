import { UserInterface } from 'interfaces/user';
import { VideoPlayerInterface } from 'interfaces/video-player';
import { GetQueryInterface } from 'interfaces';

export interface ClickInterface {
  id?: string;
  x_coordinate: number;
  y_coordinate: number;
  user_id: string;
  video_player_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  video_player?: VideoPlayerInterface;
  _count?: {};
}

export interface ClickGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  video_player_id?: string;
}
