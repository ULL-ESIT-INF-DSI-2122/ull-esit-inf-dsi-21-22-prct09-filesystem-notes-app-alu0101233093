import chalk from 'chalk';
import { accessSync, constants, readdirSync, rmdirSync, unlinkSync } from 'fs';

/**
 * Elimina una nota
 * @param user Escritor
 * @param title Título
 * @returns Mensaje con el resultado de la eliminación
 */
export function removeNote(user: string, title: string): string{
    
    try {     // Si el usuario está registrado
      accessSync('notes/' + user, constants.R_OK | constants.W_OK);

      try{    // Si la nota existe
          accessSync('notes/' + user + '/' + title + '.json', constants.R_OK | constants.W_OK);
          unlinkSync('notes/' + user + '/' + title + '.json');

          if(readdirSync('notes/' + user).length == 0){
            rmdirSync('notes/' + user);
          }
          
          return chalk.green("Note removed!");
      } catch (err){
          return chalk.red("No note found");
      }

    } catch (err) { // Si el usuario NO está registrado
      return chalk.red("User not found");
    }
}