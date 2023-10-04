import { ActionInterface } from 'interfaces/action';
import { ClickInterface } from 'interfaces/click';
import { DesignInterface } from 'interfaces/design';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VideoPlayerInterface {
  id?: string;
  name: string;
  code: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  action?: ActionInterface[];
  click?: ClickInterface[];
  design?: DesignInterface[];
  user?: UserInterface;
  _count?: {
    action?: number;
    click?: number;
    design?: number;
  };
}

export interface VideoPlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  code?: string;
  user_id?: string;
}
