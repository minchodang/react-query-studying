import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';

import { Appointment } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { useCustomToast } from '../../app/hooks/useCustomToast';

// for when server call is needed
async function removeAppointmentUser(appointment: Appointment): Promise<void> {
  const patchData = [{ op: 'remove', path: '/userId' }];
  await axiosInstance.patch(`/appointment/${appointment.id}`, {
    data: patchData,
  });
}

// TODO: update return type
export function useCancelAppointment(): UseMutateFunction<
  void,
  unknown,
  Appointment,
  unknown
> {
<<<<<<< HEAD
  const queryClient = useQueryClient();
=======
>>>>>>> main
  const toast = useCustomToast();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(removeAppointmentUser, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.appointments]);
      toast({
<<<<<<< HEAD
        title: 'You have canceled the appointment!',
=======
        title: 'You have cancled the appointment!',
>>>>>>> main
        status: 'warning',
      });
    },
  });
<<<<<<< HEAD

=======
>>>>>>> main
  return mutate;
}
