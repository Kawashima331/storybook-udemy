import InboxScreen from './InboxScreen';
import { Provider } from 'react-redux';
import store from '../lib/store';
import { http, HttpResponse } from 'msw'; // HttpResponseを追加
import { MockedState } from './TaskList.stories';
import { fireEvent } from '@storybook/test';
import { within, userEvent, expect, waitForElementToBeRemoved, waitFor } from '@storybook/test';

export default {
    title: 'InboxScreen',
    component: InboxScreen,
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
    tags: ['autodocs'],
};

export const Default = {
    parameters: {
        msw: {
            handlers: [
                http.get("https://jsonplaceholder.typicode.com/todos", (({ request }) => {
                    // URLSearchParamsを使ってクエリパラメータをチェック
                    const url = new URL(request.url);
                    const userId = url.searchParams.get('userId');
                    
                    if (userId === '1') {
                        return HttpResponse.json(MockedState.tasks);
                    }
                })),
            ],
        },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
        await waitFor(async () => {
           await fireEvent.click(canvas.getByLabelText('pinTask-1'));
           await fireEvent.click(canvas.getByLabelText('pinTask-3'));
           await fireEvent.click(canvas.getByLabelText('archiveTask-5'));
        });
    },
};

export const Error = {
    parameters: {
        msw: {
            handlers: [
                http.get("https://jsonplaceholder.typicode.com/todos", () => {
                    return new HttpResponse(null, { status: 403 });
                }),
            ],
        },
    },
};